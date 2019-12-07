import React from 'react';
import AddTodoStyles from "./add-todo-styles";

const AddTodo = () => {
  return (
    <AddTodoStyles>
      <input type="text" placeholder="Todo"/>
      <button>Add</button>
    </AddTodoStyles>
  );
};

export default AddTodo;
