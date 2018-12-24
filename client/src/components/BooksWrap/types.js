// @flow
import type { Book, Genre } from 'helpers/types';

export type PropsType = {
  selectedValue: ?string,
  filterTitleValue: string,
  filterAuthorValue: string,
  books: Array<Book>,
  handleChangeSelect: Function,
  handleChangeFilter: Function,
  handlefilterGenres: Function,
  handlefilterTitle: Function,
  handlefilterAuthor: Function,
  bookDeleteWatcher: Function,
  userType: string,
  genres: Array<Genre>,
};
