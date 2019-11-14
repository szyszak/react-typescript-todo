import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { StoreProvider } from './store/Store';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    padding-top: 60px;
    font-family: 'Open Sans';
    background-image: url(${process.env.PUBLIC_URL}/bg.jpg);
  }

`;

ReactDOM.render(
  <StoreProvider>
    <GlobalStyles />
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
