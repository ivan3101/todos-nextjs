import React from 'react';
import HeaderBarStyles from "./header-bar-styles";
import Container from "../container/container";

const HeaderBar = () => {
  return (
    <HeaderBarStyles>
      <Container>
        <h1>Todo App in NextJS</h1>
      </Container>
    </HeaderBarStyles>
  );
};

export default HeaderBar;
