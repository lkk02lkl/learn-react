
import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
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
              <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
