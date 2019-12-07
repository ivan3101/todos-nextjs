import styled from "styled-components";

const TodoStyles = styled.li`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  
  &:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
`;

export default TodoStyles;
