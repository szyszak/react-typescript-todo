import React, { useContext } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { StoreContext } from '../store/Store';
import { IContext, ITodoItem } from '../types/types';

// STYLES
const StyledTodoItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px dashed #000000;

  &:last-child {
    border-bottom: none;
  }
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ffdbad;
  border: 2px solid #000000;
  cursor: pointer;
`;

const Text = styled.p<Partial<ITodoItem>>`
  max-width: 80%;
  margin-right: auto;
  overflow-wrap: break-word;
  text-decoration: ${props => (props.complete ? 'line-through' : 'none')};
`;

// COMPONENT
const TodoItem: React.FC<ITodoItem> = ({ text, id, complete }) => {
  const { dispatch }: IContext = useContext(StoreContext);

  return (
    <StyledTodoItem>
      <Text complete={complete}>{text}</Text>

      <Checkbox complete={complete} id={id} />

      <Button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: id })}>&#x274C;</Button>
    </StyledTodoItem>
  );
};

export default TodoItem;
