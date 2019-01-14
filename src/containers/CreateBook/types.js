// @flow
import type { Genres } from 'helpers/types';

export type StateType = {
  showModal: boolean,
};
export type PropsType = {
  bookAddWatcher: Function,
  genres: Array<Genres>,
};
