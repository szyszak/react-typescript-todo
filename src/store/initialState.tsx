import { IState } from '../types/types';

const initialState: IState = [
  { text: 'feed dog', id: 0, complete: false },
  { text: 'code stuff', id: 1, complete: true },
  { text: 'see a movie', id: 2, complete: false },
  { text: 'grab a beer', id: 3, complete: true },
  { text: 'go for a walk', id: 4, complete: false }
];

export default initialState;
