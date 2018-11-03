import { createAction } from 'redux-actions';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const BOOK_SAVE = 'BOOK_SAVE';
export const SAGA_BOOK_SAVE = 'SAGA_BOOK_SAVE';
export const BOOK_DELETE = 'BOOK_DELETE';
export const SAGA_BOOK_DELETE = 'SAGA_BOOK_DELETE';
export const BOOK_SET_GENRES = 'BOOK_SET_GENRES';
export const BOOK_ADD = 'BOOK_ADD';
export const SAGA_BOOK_ADD = 'SAGA_BOOK_ADD';

export const fetchBooksRequest = createAction(FETCH_BOOKS_REQUEST);
export const fetchBooksSuccess = createAction(FETCH_BOOKS_SUCCESS);
export const fetchBooksError = createAction(FETCH_BOOKS_ERROR);
export const bookSave = createAction(BOOK_SAVE);
export const sagaBookSave = createAction(SAGA_BOOK_SAVE);
export const bookDelete = createAction(BOOK_DELETE);
export const sagaBookDelete = createAction(SAGA_BOOK_DELETE);
export const bookSetGenres = createAction(BOOK_SET_GENRES);
export const bookAdd = createAction(BOOK_ADD);
export const sagaBookAdd = createAction(SAGA_BOOK_ADD);
