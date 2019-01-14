// @flow
import type { Book, Genres } from 'helpers/types';

export type PropsType = {
  books: Array<{ ...Book }>,
  genres: Array<{ ...Genres }>,
  userType: string,
  bookDeleteWatcher: Function,
};
export type StateType = {
  selectedValue: string,
  filterTitleValue: string,
  filterAuthorValue: string,
  books: Array<{ ...Book }>,
};
