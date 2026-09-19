import { useState } from "react";
import "./ToDoList.css";

export const ToggleMessage = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div>
      <br />
      <button className="button" onClick={handleClick}>
        Click me
      </button>
      <input
        type="text"
        className="field"
        placeholder="Type a message"
        onChange={handleMessage}
      />
      <br />
      <p>{isTrue && message}</p>
    </div>
  );
};
