import React, { useContext, useState, FormEvent } from 'react';
// import styled from 'styled-components';
import { StoreContext } from '../store/Store';
import { IContext } from '../types/types';

const Form: React.FC = () => {
  const { dispatch }: IContext = useContext(StoreContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setInputValue(ev.currentTarget.value);
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: inputValue });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">ADD NEW</button>
      <br />
      <button type="button" onClick={() => dispatch({ type: 'CLEAR_TODOS' })}>
        CLEAR ALL
      </button>
    </form>
  );
};

export default Form;
