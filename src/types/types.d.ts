export interface ITodoItem {
  text: string;
  id: number;
  complete: boolean;
}

export type IState = ITodoItem[]

export type IAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'REMOVE_TODO', payload: number }
  | { type: 'TOGGLE_DONE', payload: number }
  | { type: 'CLEAR_TODOS' }

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}