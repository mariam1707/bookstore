export type FetchBooksRequestType = {
  type: 'FETCH_BOOKS_REQUEST',
  payload: Object,
};

export type FetchGenresRequestType = {
  type: 'FETCH_GENRES_REQUEST',
  payload: Object,
};

export type FetchBooksSuccessType = {
  type: 'FETCH_BOOKS_SUCCESS',
  payload: Object,
};

export type FetchGenresSuccessType = {
  type: 'FETCH_GENRES_SUCCESS',
  payload: Object,
};

export type FetchBooksErrorType = {
  type: 'FETCH_BOOKS_ERROR',
  payload: Object,
};

export type BookUpdateType = {
  type: 'BOOK_UPDATE',
  payload: Object,
};

export type BookUpdateWatcherType = {
  type: 'BOOK_UPDATE_WATCHER',
  payload: Object,
};
export type BookDeleteType = {
  type: 'BOOK_DELETE',
  payload: Object,
};
export type BookDeleteWatcherType = {
  type: 'BOOK_DELETE_WATCHER',
  payload: Object,
};
export type BookSetGenresType = {
  type: 'BOOK_SET_GENRES',
  payload: Object,
};
export type BookAddType = {
  type: 'BOOK_ADD',
  payload: Object,
};
export type BookAddWatcherType = {
  type: 'BOOK_ADD_WATCHER',
  payload: Object,
};
export type SetDateFilterWatcherType = {
  type: 'SET_DATE_FILTER_WATCHER',
  payload: Object,
};
export type SetDateFilterType = {
  type: 'SET_DATE_FILTER',
  payload: Object,
};
