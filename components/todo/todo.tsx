import React from 'react';
import TodoStyles from "./todo-styles";
import DeleteTodo from "./delete-todo/delete-todo";

interface TodoProps {
  text: string;
  onRemove: (event) => void;
}

const Todo = ({ text, onRemove }: TodoProps) => {
  return (
    <TodoStyles>
      { text }
      <DeleteTodo onClick={onRemove}>
        Delete
      </DeleteTodo>
    </TodoStyles>
  );
};

export default Todo;
