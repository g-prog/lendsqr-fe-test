"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { User } from "./types";
import { usersData } from "./data";
import tableStyles from "../userstable.module.scss";
import { useMemo, useState } from "react";
import DownwardEllipseeIcon from "../../../../../components/icons/DownWardEllipseeIcon";
import ThreeEllipseesIcon from "../../../../../components/icons/ThreeEllipseesIcon";
import Select from "react-select";
import { customSelectStyles } from "./customStyles";
import CalendarIcon from "../../../../../components/icons/CalendarIcon";
import DatePicker from "../../../../../components/datepicker/DatePicker";

const UsersTable = () => {
  const [openHeader, setOpenHeader] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ];

  const organizationOptions = [
    { value: "Dangote", label: "Dangote" },
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
        cell: ({ getValue }) => {
          const status = getValue() as string;
          return (
            <div className={tableStyles.statusContainer}>
              <span className={`${tableStyles.status} ${tableStyles[status]}`}>
                {status}
              </span>
              <ThreeEllipseesIcon />
            </div>
          );
        },
      },
    ],
    [],
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
                            <p>Date</p>
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
