import React, { useContext } from 'react';
import styled from 'styled-components';
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

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  transform: scale(2);
  cursor: pointer;
`;

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #000000;
  font-weight: bold;
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
      <Checkbox
        checked={complete}
        onChange={() => dispatch({ type: 'TOGGLE_DONE', payload: id })}
      />
      <Button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: id })}>X</Button>
    </StyledTodoItem>
  );
};

export default TodoItem;
