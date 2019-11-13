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

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body {
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
