import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { ITodoItem, IContext } from '../types/types';

// STYLES
const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-right: 10px;
  width: 24px;
  height: 24px;
  border: solid 2px #000000;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #000000;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);

  &:checked + label {
    background-color: none;
  }

  &:checked + label::after {
    display: block;
  }
`;

// COMPONENT
const Checkbox: React.FC<Partial<ITodoItem>> = ({ complete, id }) => {
  const { dispatch }: IContext = useContext(StoreContext);

  return (
    <Wrapper>
      <StyledCheckbox
        checked={complete}
        id={String(id)}
        onChange={() => dispatch({ type: 'TOGGLE_DONE', payload: id! })}
      />
      <Label htmlFor={String(id)} />
    </Wrapper>
  );
};

export default Checkbox;
