import { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const negativeHandleClick = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <br />
      <div>
        <button className="button" onClick={handleClick}>
          Increment
        </button>
        <button className="button" onClick={negativeHandleClick}>
          Decrement
        </button>
        <input
          className="field"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={handleChange}
        />
      </div>
      <br />
      <p>{count}</p>
      <br />
      <p>{message}</p>
    </div>
  );
};
