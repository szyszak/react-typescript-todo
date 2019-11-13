import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { ITodoItem } from '../types/types';
import TodoItem from './TodoItem';

// STYLES
const StyledTodoList = styled.ul`
  margin-top: 16px;
  list-style: none;
`;

// COMPONENT
const TodoList: React.FC = () => {
  const { state } = useContext(StoreContext);

  const renderedItems = state.map((item: ITodoItem, idx: number) => {
    return <TodoItem key={idx} id={item.id} text={item.text} complete={item.complete} />;
  });

  return <StyledTodoList>{renderedItems}</StyledTodoList>;
};

export default TodoList;
