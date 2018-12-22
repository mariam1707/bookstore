// @flow
// import Book from '../../utils/types';
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
  bookAddWatcher: Function,
  genres: Array<Genres>,
  books: Array<Book>,
};
export type StateType = {
  book: Object,
};
