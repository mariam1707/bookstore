// @flow
import { createAction } from 'redux-actions';
import type { ActionType } from 'types/action';
import type {
  FetchBooksRequestType,
  FetchGenresRequestType,
  FetchBooksSuccessType,
  FetchGenresSuccessType,
  FetchBooksErrorType,
  BookUpdateType,
  BookUpdateWatcherType,
  BookDeleteType,
  BookDeleteWatcherType,
  BookSetGenresType,
  BookAddType,
  BookAddWatcherType,
  SetDateFilterWatcherType,
  SetDateFilterType,
} from 'types/books/action';

export const FETCH_BOOKS_REQUEST: $PropertyType<FetchBooksRequestType, 'type'> =
  'FETCH_BOOKS_REQUEST';
export const fetchBooksRequest: ActionType<
  $PropertyType<FetchBooksRequestType, 'type'>,
  $PropertyType<FetchBooksRequestType, 'payload'>
> = createAction(FETCH_BOOKS_REQUEST);

export const FETCH_GENRES_REQUEST: $PropertyType<FetchGenresRequestType, 'type'> =
  'FETCH_GENRES_REQUEST';
export const fetchGenresRequest: ActionType<
  $PropertyType<FetchGenresRequestType, 'type'>,
  $PropertyType<FetchGenresRequestType, 'payload'>
> = createAction(FETCH_GENRES_REQUEST);

export const FETCH_BOOKS_SUCCESS: $PropertyType<FetchBooksSuccessType, 'type'> =
  'FETCH_BOOKS_SUCCESS';
export const fetchBooksSuccess: ActionType<
  $PropertyType<FetchBooksSuccessType, 'type'>,
  $PropertyType<FetchBooksSuccessType, 'payload'>
> = createAction(FETCH_BOOKS_SUCCESS);

export const FETCH_GENRES_SUCCESS: $PropertyType<FetchGenresSuccessType, 'type'> =
  'FETCH_GENRES_SUCCESS';
export const fetchGenresSuccess: ActionType<
  $PropertyType<FetchGenresSuccessType, 'type'>,
  $PropertyType<FetchGenresSuccessType, 'payload'>
> = createAction(FETCH_GENRES_SUCCESS);

export const FETCH_BOOKS_ERROR: $PropertyType<FetchBooksErrorType, 'type'> = 'FETCH_BOOKS_ERROR';
export const fetchBooksError: ActionType<
  $PropertyType<FetchBooksErrorType, 'type'>,
  $PropertyType<FetchBooksErrorType, 'payload'>
> = createAction(FETCH_BOOKS_ERROR);

export const BOOK_UPDATE: $PropertyType<BookUpdateType, 'type'> = 'BOOK_UPDATE';
export const bookUpdate: ActionType<
  $PropertyType<BookUpdateType, 'type'>,
  $PropertyType<BookUpdateType, 'payload'>
> = createAction(BOOK_UPDATE);

export const BOOK_UPDATE_WATCHER: $PropertyType<BookUpdateWatcherType, 'type'> =
  'BOOK_UPDATE_WATCHER';
export const bookUpdateWatcher: ActionType<
  $PropertyType<BookUpdateWatcherType, 'type'>,
  $PropertyType<BookUpdateWatcherType, 'payload'>
> = createAction(BOOK_UPDATE_WATCHER);

export const BOOK_DELETE: $PropertyType<BookDeleteType, 'type'> = 'BOOK_DELETE';
export const bookDelete: ActionType<
  $PropertyType<BookDeleteType, 'type'>,
  $PropertyType<BookDeleteType, 'payload'>
> = createAction(BOOK_DELETE);

export const BOOK_DELETE_WATCHER: $PropertyType<BookDeleteWatcherType, 'type'> =
  'BOOK_DELETE_WATCHER';
export const bookDeleteWatcher: ActionType<
  $PropertyType<BookDeleteWatcherType, 'type'>,
  $PropertyType<BookDeleteWatcherType, 'payload'>
> = createAction(BOOK_DELETE_WATCHER);

export const BOOK_SET_GENRES: $PropertyType<BookSetGenresType, 'type'> = 'BOOK_SET_GENRES';
export const bookSetGenres: ActionType<
  $PropertyType<BookSetGenresType, 'type'>,
  $PropertyType<BookSetGenresType, 'payload'>
> = createAction(BOOK_SET_GENRES);

export const BOOK_ADD: $PropertyType<BookAddType, 'type'> = 'BOOK_ADD';
export const bookAdd: ActionType<
  $PropertyType<BookAddType, 'type'>,
  $PropertyType<BookAddType, 'payload'>
> = createAction(BOOK_ADD);

export const BOOK_ADD_WATCHER: $PropertyType<BookAddWatcherType, 'type'> = 'BOOK_ADD_WATCHER';
export const bookAddWatcher: ActionType<
  $PropertyType<BookAddWatcherType, 'type'>,
  $PropertyType<BookAddWatcherType, 'payload'>
> = createAction(BOOK_ADD_WATCHER);

export const SET_DATE_FILTER_WATCHER: $PropertyType<SetDateFilterWatcherType, 'type'> =
  'SET_DATE_FILTER_WATCHER';
export const setDateFilterWatcher: ActionType<
  $PropertyType<SetDateFilterWatcherType, 'type'>,
  $PropertyType<SetDateFilterWatcherType, 'payload'>
> = createAction(SET_DATE_FILTER_WATCHER);

export const SET_DATE_FILTER: $PropertyType<SetDateFilterType, 'type'> = 'SET_DATE_FILTER';
export const setDateFilter: ActionType<
  $PropertyType<SetDateFilterType, 'type'>,
  $PropertyType<SetDateFilterType, 'payload'>
> = createAction(SET_DATE_FILTER);
