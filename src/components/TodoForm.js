import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // 添加todo
      addTodo(value);
      // 提交后清空表单
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add your task in the input box!"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
