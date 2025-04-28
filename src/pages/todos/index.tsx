import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/countStore";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./columns";
import { DataTable } from "./DataTable";

function Todos() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  const { data } = useQuery({
    queryKey: queryKeys.todosKey,
    queryFn: async () =>
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => json ?? []),
  });

  return (
    <>
      <Button onClick={increment}>count is {count} !</Button>
      <DataTable columns={columns} data={data ?? []} />
    </>
  );
}

export default Todos;
