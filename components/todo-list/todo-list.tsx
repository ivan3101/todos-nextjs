import React from 'react';
import Todo from "../todo/todo";

interface TodoListProps {
  todos: string[];
  removeTodo: (id: string) => void;
}

const TodoList = ({ todos, removeTodo }: TodoListProps) => {
  return (
    <ul>
      {todos && !!todos.length && todos.map((todo, index) => (
        <Todo
          text={todo}
          key={index}
          onRemove={() => removeTodo(index.toString())}
        />
      ))}
    </ul>
  );
};

export default TodoList;
