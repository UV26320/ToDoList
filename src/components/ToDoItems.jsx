import React from "react";

function ToDoItems(props) {
  return (
    <div
      onClick={() => {                     // executed when the user clicks because of call a function not pass 
        props.onChecked(props.id);      
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItems;
