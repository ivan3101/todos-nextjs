import React, {useState} from 'react';
import AddTodoStyles from "./add-todo-styles";

interface AddTodoProps {
  addTodo: (todoText: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (value) setTodo(value.trim());
  };

  return (
    <AddTodoStyles>
      <form>
        <input type="text" placeholder="Todo" onChange={onChange} value={todo}/>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();

            addTodo(todo);
            setTodo("");
          }}
        >
          Add
        </button>
      </form>
    </AddTodoStyles>
  );
};

export default AddTodo;
