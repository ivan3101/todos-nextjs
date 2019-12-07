import React from 'react';
import TodoStyles from "./todo-styles";
import DeleteTodo from "./delete-todo/delete-todo";

const Todo = () => {
  return (
    <TodoStyles>
      test
      <DeleteTodo>
        Delete
      </DeleteTodo>
    </TodoStyles>
  );
};

export default Todo;
