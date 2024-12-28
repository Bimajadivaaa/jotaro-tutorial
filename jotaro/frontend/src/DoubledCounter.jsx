import { doubledCounterAtom  } from "./atoms"; 
import { useAtom } from "jotai";

export const Counter = () => {
    const [doubleCounter] = useAtom(doubledCounterAtom);
  return (
    <div>
      {doubleCounter}
    </div>
  );
};
