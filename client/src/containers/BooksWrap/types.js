// @flow
import type { Book, Genres } from 'helpers/types';

export type PropsType = {
  books: Array<Book>,
  genres: Array<Genres>,
  userType: string,
  fetchBooksRequest: Function,
  bookDeleteWatcher: Function,
  fetchGenresRequest: Function,
};
export type StateType = {
  filterGenres: string,
  selectedValue: string,
  filterTitle: string,
  filterAuthor: string,
  books: Array<Book>,
};
