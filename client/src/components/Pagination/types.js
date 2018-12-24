// @flow
import type { Book } from 'helpers/types';

export type PropsType = {
  pages: Array<number>,
  currentPage: ?number,
  totalPages: ?number,
  gotoPage: Function,
  currentBooks: Array<Book>,
  handlePageLimit: Function,
  options: Array<number>,
  userType: string,
  handleDelete: Function,
};
