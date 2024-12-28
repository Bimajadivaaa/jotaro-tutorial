import { counterAtom } from "./atoms"; 
import { useAtom } from "jotai";

export const Counter = () => {
    const [, setCount] = useAtom(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
};
