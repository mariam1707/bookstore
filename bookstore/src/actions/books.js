import { createAction } from 'redux-actions';


export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';
export const BOOK_SAVE = 'BOOK_SAVE';
export const SAGA_BOOK_SAVE = 'SAGA_BOOK_SAVE';

export const fetchBooksRequest = createAction(FETCH_BOOKS_REQUEST);
export const fetchBooksSuccess = createAction(FETCH_BOOKS_SUCCESS);
export const fetchBooksError = createAction(FETCH_BOOKS_ERROR);
export const bookSave = createAction(BOOK_SAVE);
export const sagaBookSave = createAction(SAGA_BOOK_SAVE);