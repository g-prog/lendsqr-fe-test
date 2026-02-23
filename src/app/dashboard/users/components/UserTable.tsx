"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  CellContext,
  Row,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { User } from "./types";
import { usersData } from "./data";
import tableStyles from "../userstable.module.scss";
import { useMemo, useState, useEffect, useRef } from "react";
import DownwardEllipseeIcon from "../../../../components/icons/DownWardEllipseeIcon";
import ThreeEllipseesIcon from "../../../../components/icons/ThreeEllipseesIcon";
import Select from "react-select";
import { customSelectStyles } from "./customStyles";
import CalendarIcon from "../../../../components/icons/CalendarIcon";
import DatePicker from "../../../../components/datepicker/DatePicker";
import { formatDateToDDMMYY } from "../../../../utils/helper";
import EyeIcon from "@/components/icons/EyeIcon";
import BlacklistIcon from "@/components/icons/BlacklistIcon";
import ActivateUserIcon from "@/components/icons/ActivateUserIcon";

interface StatusCellProps {
  getValue: () => unknown;
  row: Row<User>;
  openRowId: string | null;
  setOpenRowId: (id: string | null) => void;
  router: ReturnType<typeof useRouter>;
}


interface StatusCellProps {
  getValue: () => unknown;
  row: Row<User>;
  openRowId: string | null;
  setOpenRowId: (id: string | null) => void;
  router: ReturnType<typeof useRouter>;
}

const StatusCell = ({
  getValue,
  row,
  openRowId,
  setOpenRowId,
  router,
}: StatusCellProps) => {
  const status = getValue() as string;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  
  const rowId = row.original.username;
  const isOpen = openRowId === rowId;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenRowId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setOpenRowId]);

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setOpenRowId(openRowId === rowId ? null : rowId);
  };

  const handleOptionClick = (e: React.MouseEvent, action: string) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(`${action} user:`, row.original.username);

    router.push(`/dashboard/users/${row.original.username}`);
    setOpenRowId(null);
  };

  return (
    <div className={tableStyles.statusContainer}>
      <span className={`${tableStyles.status} ${tableStyles[status] || ""}`}>
        {status}
      </span>

      <div
        ref={buttonRef}
        onClick={handleDropdownToggle}
        className={tableStyles.ellipsisButton}
      >
        <ThreeEllipseesIcon />
      </div>

      {isOpen && (
        <div className={tableStyles.optionDropdown} ref={dropdownRef}>
          <div
            className={tableStyles.optionFlex}
            onClick={(e) => handleOptionClick(e, "view")}
          >
            <EyeIcon />
            <p>View Details</p>
          </div>

          <div
            className={tableStyles.optionFlex}
            onClick={(e) => handleOptionClick(e, "blacklist")}
          >
            <BlacklistIcon />
            <p>Blacklist User</p>
          </div>

          <div
            className={tableStyles.optionFlex}
            onClick={(e) => handleOptionClick(e, "activate")}
          >
            <ActivateUserIcon />
            <p>Activate User</p>
          </div>
        </div>
      )}
    </div>
  );
};



const UsersTable = () => {
  const [openHeader, setOpenHeader] = useState<string | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openRowId, setOpenRowId] = useState<string | null>(null);
  const router = useRouter();

  const formattedDate = formatDateToDDMMYY(date);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ];

  const organizationOptions = [
    { value: "levi", label: "Levi" },
    { value: "Paystack", label: "Paystack" },
  ];

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { accessorKey: "organization", header: "ORGANIZATION" },
      { accessorKey: "username", header: "USERNAME" },
      { accessorKey: "email", header: "EMAIL" },
      { accessorKey: "phoneNumber", header: "PHONE NUMBER" },
      { accessorKey: "dateJoined", header: "DATE JOINED" },
      {
        accessorKey: "status",
        header: "STATUS",
        cell: (props) => (
          <StatusCell
            {...props}
            openRowId={openRowId}
            setOpenRowId={setOpenRowId}
            router={router}
          />
        ),
      },
    ],
    [openRowId, setOpenRowId, router],
  );

  const table = useReactTable({
    data: usersData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <>
      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    <div className={tableStyles.thContent}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenHeader(
                            openHeader === header.id ? null : header.id,
                          );
                        }}
                      >
                        <DownwardEllipseeIcon />
                      </div>
                    </div>

                    {openHeader === header.id && (
                      <div className={tableStyles.filterDropdown}>
                        <div className={tableStyles.optionCol}>
                          <label>Organization</label>
                          <Select
                            options={organizationOptions}
                            placeholder="Select"
                            components={{ IndicatorSeparator: null }}
                            styles={customSelectStyles}
                          />
                        </div>

                        <div className={tableStyles.optionCol}>
                          <label>Username</label>
                          <input
                            type="text"
                            placeholder="User"
                            className={tableStyles.inputStyles}
                          />
                        </div>

                        <div className={tableStyles.optionCol}>
                          <label>Email</label>
                          <input
                            type="text"
                            placeholder="Email"
                            className={tableStyles.inputStyles}
                          />
                        </div>

                        <div className={tableStyles.optionCol}>
                          <label>Date</label>
                          <div className={tableStyles.calendarStyles}>
                            <p>{date ? formattedDate : "Date"}</p>
                            <div onClick={toggleCalendar}>
                              <CalendarIcon />
                            </div>

                            {isOpen && (
                              <div className={tableStyles.calendarWrapper}>
                                <DatePicker
                                  value={date}
                                  onChange={setDate}
                                  placeholder="Choose date"
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className={tableStyles.optionCol}>
                          <label>Phone Number</label>
                          <input
                            type="text"
                            placeholder="Phone Number"
                            className={tableStyles.inputStyles}
                          />
                        </div>

                        <div className={tableStyles.optionCol}>
                          <label>Status</label>
                          <Select
                            options={options}
                            placeholder="Status"
                            components={{ IndicatorSeparator: null }}
                            styles={customSelectStyles}
                          />
                        </div>

                        <div className={tableStyles.bottomBtn}>
                          <button className={tableStyles.resetBtn}>
                            Reset
                          </button>
                          <button className={tableStyles.filterBtn}>
                            Filter
                          </button>
                        </div>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={tableStyles.pagination}>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>

        <span>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default UsersTable;
