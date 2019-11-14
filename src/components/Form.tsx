import React, { useContext, useState, FormEvent } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IContext } from '../types/types';

// STYLES
const Label = styled.label`
  font-size: 14px;
  margin-right: 6px;
`;

const TextInput = styled.input.attrs({ type: 'text' })`
  height: 28px;
  padding: 4px;

  @media (max-width: 430px) {
    width: 160px;
  }
`;

const Button = styled.button`
  height: 28px;
  padding: 0 10px;
  background-color: #53dcff;
  border: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 10px 0;
`;

// COMPONENT
const Form: React.FC = () => {
  const { dispatch }: IContext = useContext(StoreContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setInputValue(ev.currentTarget.value);
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (inputValue.length === 0) {
      alert(`Todo text can't be empty.`);
      return;
    }

    dispatch({ type: 'ADD_TODO', payload: inputValue });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="newTask">New task:</Label>
        <TextInput id="newTask" value={inputValue} onChange={handleChange} />
        <Button type="submit">ADD</Button>
      </Wrapper>
      <Button type="button" onClick={() => dispatch({ type: 'CLEAR_TODOS' })}>
        CLEAR ALL
      </Button>
    </form>
  );
};

export default Form;
