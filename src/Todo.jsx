import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [items, setItems] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newItem, setNewItem] = useState("");
  let clicked = () => {
    setItems((prevItems) => {
      return [...items, { task: newItem, id: uuidv4() }];
    });
    setNewItem("");
  };

  let updateItem = (event) => {
    setNewItem(event.target.value);
  };

  let deleteItem = (id) => {
    setItems(items.filter((item) => item.id != id));
  };

  let markAllAsDone = () => {
    setItems((prevArr) =>
      prevArr.map((item) => {
        return {
          ...item,

          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setItems((prevArr) =>
      prevArr.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: true,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <input id="ipt" type="text" value={newItem} onChange={updateItem} />
      <button onClick={clicked}>Add</button>
      <br />
      <hr />
      <h4>todo list</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ color: item.isDone ? "red" : "white" }}>
            <input type="checkbox" /> &nbsp;
            <span>{item.task} &nbsp;</span>
            <button onClick={() => deleteItem(item.id)}>Delete </button>
            <button onClick={() => markAsDone(item.id)}>Update this</button>
          </li>
        ))}
      </ul>
      <button onClick={markAllAsDone}>Upper Case</button>
    </div>
  );
}
