import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IContext } from '../types/types';

// INTERFACES
interface IProps {
  text: string;
  id: number;
  complete: boolean;
}

// STYLES
const StyledTodoItem = styled.li`
  padding: 6px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 3px;
  border: 2px solid #000000;
`;

const Text = styled.span<Partial<IProps>>`
  text-decoration: ${props => (props.complete ? 'line-through' : 'none')};
`;

// COMPONENT
const TodoItem: React.FC<IProps> = ({ text, id, complete }) => {
  const { dispatch }: IContext = useContext(StoreContext);

  return (
    <StyledTodoItem>
      <Text complete={complete}>{text}</Text>
      <Button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: id })}>X</Button>
      <Button onClick={() => dispatch({ type: 'TOGGLE_DONE', payload: id })}>TOGGLE DONE</Button>
    </StyledTodoItem>
  );
};

export default TodoItem;
