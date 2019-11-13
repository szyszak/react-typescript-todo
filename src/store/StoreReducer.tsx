import { IState, IAction } from '../types/types';

const generateId = () => {
  return Math.floor(new Date().getTime() * Math.random());
};

const StoreReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newState: IState = [
        ...state,
        { text: action.payload, id: generateId(), complete: false }
      ];

      return newState;
    }

    case 'REMOVE_TODO': {
      const newState: IState = state.filter(item => {
        return item.id !== action.payload;
      });

      return newState;
    }

    case 'TOGGLE_DONE': {
      const newState: IState = [...state];
      const todoItem = newState.find(item => item.id === action.payload)!;
      todoItem.complete = !todoItem.complete;

      return newState;
    }

    case 'CLEAR_TODOS': {
      return [];
    }

    default:
      return state;
  }
};

export default StoreReducer;
