import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

type Person = {
  name: string;
  days: { [key: number]: string | null };
};

const data: Person[] = [
  {
    name: "John Doe",
    days: {
      1: "✔️",
      2: null,
      3: "✔️",
    },
  },
  {
    name: "Jane Smith",
    days: {
      1: null,
      2: "x",
      3: "✔️",
    },
  },
];

const AttendanceTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      ...Array.from({ length: 31 }, (_, i) => ({
        accessorKey: `days.${i + 1}`,
        header: `${i + 1}`,
        size: 1,
      })),
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,

  });

  return <MaterialReactTable table={table} />;
};

export default AttendanceTable;
