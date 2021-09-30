import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      //handle alert
    }
    else if(name && isEditing){
      //handle different type of alert and some changes
    }
    else{
      //show alert and add new item
      let time = new Date().getTime().toString();
      const newItem = {id: time,title: name}
      setList([...list,newItem]);
      setName('');

    }
  }

  const clearList = () => {
    setList([]);
  }

  const editBtnHandler  = (id) => {
console.log(id + "from edit");
  }

  const deleteBtnHandler = (id) => {
  const newItems = list.filter((item) => item.id !== id)
  setList(newItems);
  }

  return (
    <section className="section-center">
      <form class="grocery-form" onSubmit= {handleSubmit}>
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g., Eggs "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
      </form>
      <div className="grocery-container">
        <List items = {list} eBH = {editBtnHandler} dBH = {deleteBtnHandler}/>
        <button className="clear-btn" onClick = {clearList}>clear items</button>
      </div>
    </section>
  );
}

export default App;
