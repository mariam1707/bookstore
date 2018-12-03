// @flow
// import type { Book, Genres } from '../../utils/types';

type Book = {
  _id: string,
  title: string,
  author: string,
  image: string,
  price: number,
  genre: string,
  date: Date,
};

type Genres = {
  _id: string,
  genre: string,
};

export type PropsType = {
  books: Array<Book>,
  totalPages: ?number,
  genres: Array<Genres>,
  user_type: string,
  pagination: {
    currentPage: ?number,
    perPage: ?number,
  },
  fetchBooksRequest: Function,
  sagaBookDelete: Function,
  fetchGenresRequest: Function,
  setDateFilterSaga: Function,
  setCurrentPage: Function,
  setPerPage: Function,
};
export type StateType = {
  filterGenres: string,
  selectedvalue: string,
  filterTitle: string,
  filterAuthor: string,
  currentBooks: Array<Book>,
  currentPage: ?number,
  totalPages: ?number,
  totalBooks: ?number,
  startDate: Date,
  endDate: Date,
  perPage: ?number,
  options: Array<number>,
};
