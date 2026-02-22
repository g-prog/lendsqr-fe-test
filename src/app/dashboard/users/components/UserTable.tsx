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
import { useMemo } from "react";
import DownwardEllipseeIcon from "../../../../../components/icons/DownWardEllipseeIcon";
import ThreeEllipseesIcon from "../../../../../components/icons/ThreeEllipseesIcon";

const UsersTable = () => {
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
                      <DownwardEllipseeIcon />
                    </div>
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
                    {flexRender(
                      cell.column.columnDef.cell ??
                        cell.column.columnDef.accessorKey,
                      cell.getContext(),
                    )}
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
