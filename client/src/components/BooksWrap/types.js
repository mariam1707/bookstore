// flow
import type { Book, Genre } from 'helpers/types';

export type PropsType = {
  selectedValue: ?number,
  filterTitle: Function,
  filterAuthor: Function,
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
