import React, { useReducer, createContext } from 'react';
import initialState from './initialState';
import StoreReducer from './StoreReducer';

const StoreContext = createContext<any>(initialState);

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
