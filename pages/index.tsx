import React from 'react'
import HeaderBar from "../components/header-bar/header-bar";
import Content from "../components/content/content";
import Container from "../components/container/container";
import Todos from "../components/todos/todos";

const Home = () => (
  <>
    <HeaderBar/>
    <Content>
      <Container>
        <Todos/>
      </Container>
    </Content>
  </>
);

export default Home
