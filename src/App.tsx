import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';
import Form from './components/Form';

// STYLES
const MainHeader = styled.h1``;

// COMPONENT
const App: React.FC = () => {
  return (
    <div>
      <MainHeader>Todo App</MainHeader>
      <TodoList />
      <Form />
    </div>
  );
};

export default App;
