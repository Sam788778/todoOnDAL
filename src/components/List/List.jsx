import React, { useState } from 'react';
import { API } from '../../Api/Api';
import styles from './List.module.css';

const List = ({ todos, dispatch }) => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = (todo) => {
    const updatedTodo = { ...todo, title: editText };
    API.editTodo(updatedTodo, dispatch);
    setEditId(null);
    setEditText("");
  };

  return (
    <div className={styles.list}>
      {todos.map(todo => (
        <div key={todo.id} className={styles.todoItem}>
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(todo)}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.title}</span>
              <button onClick={() => {
                setEditId(todo.id);
                setEditText(todo.title);
              }}>Edit</button>
              <button onClick={() => API.removeTodo(todo.id, dispatch)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;