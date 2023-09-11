import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      onClick={() => {
        setIsDone((prevValue) => {
          return !prevValue;
        });
      }}
    >
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItems;
