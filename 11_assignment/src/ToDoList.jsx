import { useState } from "react";
import "./ToDoList.css";

export const ToDoList = () => {
  const [isHidden, setIsHidden] = useState(false);
  const list = ["coding", "eating", "sleeping"];

  const tasks = list.map((task, index) => {
    return <p key={index}>{task}</p>;
  });

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Click to hide
      </button>
      {isHidden && tasks}
    </div>
  );
};
