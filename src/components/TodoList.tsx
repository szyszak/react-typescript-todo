import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { ITodoItem, IContext } from '../types/types';
import TodoItem from './TodoItem';

// STYLES
const StyledTodoList = styled.ul`
  list-style: none;
`;

const Paragraph = styled.p`
  margin-top: 6px;
  font-size: 22px;
`;

// COMPONENT
const TodoList: React.FC = () => {
  const { state }: IContext = useContext(StoreContext);

  const renderedItems = state.map((item: ITodoItem, idx: number) => {
    return <TodoItem key={idx} id={item.id} text={item.text} complete={item.complete} />;
  });

  if (state.length === 0) {
    return <Paragraph>No todos found.</Paragraph>;
  } else {
    return <StyledTodoList>{renderedItems}</StyledTodoList>;
  }
};

export default TodoList;
