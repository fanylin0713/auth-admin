import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: ({ row }) => (row.original.completed ? "✅" : "❌"),
  },
];
