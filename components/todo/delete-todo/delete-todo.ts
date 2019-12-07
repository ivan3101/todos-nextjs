import styled from "styled-components";

const DeleteTodo = styled.button`
  margin-left: auto;
  background-color: #ff0000; 
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border: 0;
  cursor: pointer;
  
  &:hover, &:focus {
    background-color: #CC0000;
  }
`;

export default DeleteTodo;
