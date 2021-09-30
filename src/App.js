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
      showAlert(true,'danger','enter a grocery item to be added.')
    }
    else if(name && isEditing){
      //handle different type of alert and some changes
      showAlert(true,'success','item edit successful!')
      setList( 
        list.map((item) => {
         if(item.id === editId){
           return {...item,title: name}
         }
         return item
        })
      );
      setName('');
      setIsEditing(false);
      setEditId(null);
    }
    else{
      //show alert and add new item
      showAlert(true,'success','item added to the list')
      let time = new Date().getTime().toString();
      const newItem = {id: time,title: name}
      setList([...list,newItem]);
      setName('');

    }
  }

  const clearList = () => {
    setList([]);
  }

  const editBtnHandler = (id) => {
    // console.log(id + "from edit");
    const specItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specItem.title);
  };

  const deleteBtnHandler = (id) => {
    showAlert(true,'danger','delted item successfuly.');
  const newItems = list.filter((item) => item.id !== id)
  setList(newItems);
  }

  const showAlert = (show='false' ,type= "", msg= ""  ) => {
    //here as it is just show:show we can skip and write it as show
    setAlert({show,type,msg});

  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit= {handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert = {showAlert}/>}
        <h3>grocery buddy!</h3>
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
      {list.length > 0 && <div className="grocery-container">
        <List items = {list} eBH = {editBtnHandler} dBH = {deleteBtnHandler} list={list}/>
        <button className="clear-btn" onClick = {clearList}>clear items</button>
      </div>}
    </section>
  );
}

export default App;
