import React, {useState} from 'react';
import TodosStyles from "./todos-styles";
import TodosHeader from "../todos-header/todos-header";
import AddTodo from "../add-todo/add-todo";
import TodoList from "../todo-list/todo-list";

const Todos = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todoText) => {
    setTodos([
      ...todos,
      todoText
    ]);
  };

  const removeTodo = (id) => {
    setTodos([
      ...todos.slice(0, id),
      ...todos.slice(id + 1)
    ])
  };

  return (
    <TodosStyles>
      <TodosHeader>
        <h2>TODOS</h2>
      </TodosHeader>

      <AddTodo addTodo={addTodo} />

      <TodoList todos={todos} removeTodo={removeTodo} />
    </TodosStyles>
  );
};

export default Todos;
