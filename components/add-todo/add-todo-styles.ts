import styled from "styled-components";

const AddTodoStyles = styled.div`
  padding: 1rem 1.25rem; 
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #dddddd;
  
  input {
    font-size: 15px;
    width: 100%;
    padding: 0.75rem 0.25rem;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 20px;
    
    &:focus {
      border-bottom-color: #007eb4;
      box-shadow: 0 5px 4px -6px #007eb4;
    }
  }
  
  button {
     padding: 0.75rem;
     background-color: #007eb4;
     border: 0;
     color: #ffffff;
     text-transform: uppercase;
     cursor: pointer;
     font-weight: 600;
     width: 100%;
     
     &:hover, &:focus {
      background-color: #006590;
     }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    
    input {
      width: 80%;
      margin: 0;
    }
    
    button {
      margin-left: auto;
      width: 15%;
      padding: 0 1rem;
    }
  }
`;

export default AddTodoStyles;
