import { useCountStore } from "./store/countStore";

function App() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  return (
    <div>
      <button onClick={increment}>count is {count} !</button>
    </div>
  );
}

export default App;
