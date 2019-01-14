// @flow
export type Book = {
  _id: ?string,
  title: ?string,
  author: ?string,
  image: ?string,
  price: ?number,
  genre: ?string,
  date: ?Date,
};

export type Genres = {
  _id: ?string,
  genre: ?string,
};

export type User = {
  id: string,
  name: string,
  avatar: string,
  user_type: string,
  iat: Number,
  exp: Number,
};
