import React, { useState } from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }


  // below we can use the arrow function
  //   function addItem() {          
  //     setItems(prevItems => {
  //       return [...prevItems, inputText];
  //     });
  //     setInputText("");
  //   }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button
          onClick={() => {
            setItems((prevItems) => {
              return [...prevItems, inputText];
            });
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItems text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
