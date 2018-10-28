import { createAction } from 'redux-actions';


export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR';

export const fetchBooksRequest = createAction(FETCH_BOOKS_REQUEST);
export const fetchBooksSuccess = createAction(FETCH_BOOKS_SUCCESS);
export const fetchBooksError = createAction(FETCH_BOOKS_ERROR);