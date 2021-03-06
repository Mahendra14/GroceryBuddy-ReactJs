import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,eBH , dBH}) => {
  return (<>
  <div className="grocery-list">
    {items.map((item) => {
      const {id,title} = item;
      return (
        <article className="grocery-item" key={id}>
          <p className="title">{title}</p>
          <div className="button-container">
            <button type="button" className="edit-btn" onClick = {() => eBH(id)}>
              <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick = {() => dBH(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      );
    })}
  </div>
  </>);

}

export default List
