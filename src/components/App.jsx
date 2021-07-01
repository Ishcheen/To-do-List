import React, { useState } from "react";

function App() {
  const [ listItem, setListItem ]= useState("");
  const [ items, setItems ]=useState([]);
  function handleEvent(event){
    const value=event.target.value;
    setListItem(value);
  }
  function addItems(){
    setItems((prevItems)=>{
      return [...prevItems, listItem];
    });
    setListItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleEvent} type="text" value={ listItem }/>
        <button onClick= {addItems}>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item=> (<li>{item}</li>))}
        </ul>
      </div>
    </div>
  );
}

export default App;
