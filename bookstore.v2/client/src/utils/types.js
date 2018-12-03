// @flow
export type Book = {
  _id: string,
  title: string,
  author: string,
  image: string,
  price: number,
  genre: string,
  date: Date,
};

export type Genres = {
  _id: string,
  genre: string,
};
