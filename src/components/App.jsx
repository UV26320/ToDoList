import React, { useState } from "react";
import ToDoItems from "./ToDoItems";
import Header from "./Header";
import InputTextArea from "./InputTextArea";

function App() {
  const [items, setItems] = useState([]);

  function addItems(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteTodoItem(id) {
    // here it is return array of element which index is not match a id
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <InputTextArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItems
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteTodoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
