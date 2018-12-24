// @flow
import type { Book } from 'helpers/types';

export type PropsType = {
  pageLimit: number,
  books: Array<Book>,
  handleDelete: Function,
  userType: string,
};

export type StateType = {
  currentPage: number,
  currentBooks: Array<Book>,
  books: Array<Book>,
  pageLimit: number,
  options: Array<number>,
};
