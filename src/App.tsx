import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import Form from './components/Form';

// STYLES
const Wrapper = styled.div`
  width: 420px;
  padding: 30px;
  background-color: #ffffff;

  @media (max-width: 430px) {
    width: 320px;
    padding: 15px;
  }
`;

const MainHeader = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;

// COMPONENT
const App: React.FC = () => {
  return (
    <Wrapper>
      <MainHeader>Todo App</MainHeader>
      <Form />
      <TodoList />
    </Wrapper>
  );
};

export default App;
