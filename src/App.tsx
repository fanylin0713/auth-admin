import { useCountStore } from "./store/countStore";
import { Button } from "./components/ui/button";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  return (
    <div>
      <Button onClick={increment}>count is {count} !</Button>
    </div>
  );
}

export default App;
