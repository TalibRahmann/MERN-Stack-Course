import { useState, useEffect } from "react";
export const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [tick]);
  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <p>{count}</p>
    </div>
  );
};
