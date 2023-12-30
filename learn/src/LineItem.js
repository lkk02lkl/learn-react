import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input 
        type="checkbox" 
        id={`checkbox-${item.id}`} 
        onChange={() => handleCheck(item.id)} 
        checked={item.checked} 
      />
      <label 
        htmlFor={`checkbox-${item.id}`} 
        style={item.checked ? { textDecoration: "line-through" } : null} 
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt 
        onClick={() => handleDelete(item.id)} 
        role="button" 
        tabIndex="0" 
        aria-label={`Delete ${item.id}`}
      />
    </li>
  );
};

export default LineItem