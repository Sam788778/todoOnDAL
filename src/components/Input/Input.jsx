import React, { useState } from 'react';
import styles from './Input.module.css';
import { API } from '../../Api/Api';

const Input = ({ dispatch }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        title: text,
        completed: false
      };
      API.addTodo(newTodo, dispatch);
      setText("");
    }
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        className={styles.textInput}
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.submitButton} onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Input;