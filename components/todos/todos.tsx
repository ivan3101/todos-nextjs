import React from 'react';
import TodosStyles from "./todos-styles";
import TodosHeader from "../todos-header/todos-header";
import AddTodo from "../add-todo/add-todo";
import TodoList from "../todo-list/todo-list";

const Todos = () => {
  return (
    <TodosStyles>
      <TodosHeader>
        <h2>TODOS</h2>
      </TodosHeader>

      <AddTodo />

      <TodoList/>
    </TodosStyles>
  );
};

export default Todos;
