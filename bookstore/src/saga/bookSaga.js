import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_BOOKS_REQUEST,
  fetchBooksSuccess,
  fetchBooksError,
  SAGA_BOOK_SAVE,
  bookSave,
  SAGA_BOOK_DELETE,
  bookDelete,
  // bookSetGenres,
  SAGA_BOOK_ADD,
  bookAdd,
  FETCH_GENRES_REQUEST,
  fetchGenresSuccess,
} from '../actions/books';

export function* fetchBooks() {
  const options = {
    url: 'http://localhost:3001/books',
    method: 'get',
  };
  try {
    const response = yield call(axios, options);
    yield put(fetchBooksSuccess(response.data));
  } catch (error) {
    const message = `${error.name} ${error.message}`;
    yield put(fetchBooksError(message));
  }
}
export function* fetchGenres() {
  const options = {
    url: 'http://localhost:3001/genres',
    method: 'get',
  };
  try {
    const response = yield call(axios, options);
    yield put(fetchGenresSuccess(response.data));
  } catch (error) {
    const message = `${error.name} ${error.message}`;
    yield put(fetchBooksError(message));
  }
}

export function* saveBook({ payload }) {
  const options = {
    url: `http://localhost:3001/books/${payload.id}`,
    method: 'patch',
    data: {
      ...payload,
    },
  };
  try {
    const response = yield call(axios, options);
    if (response) {
      yield put(bookSave(payload));
    }
  } catch (error) {
    const message = `${error.name} ${error.message}`;
    yield put(fetchBooksError(message));
  }
}
export function* deleteBook({ payload }) {
  const options = {
    url: `http://localhost:3001/books/${payload.id_db}`,
    method: 'delete',
  };
  try {
    const response = yield call(axios, options);
    if (response) {
      yield put(bookDelete(payload.id_arr));
    }
  } catch (error) {
    const message = `${error.name} ${error.message}`;
    yield put(fetchBooksError(message));
  }
}
export function* addBook({ payload }) {
  const options = {
    url: 'http://localhost:3001/books/',
    method: 'post',
    data: payload,
  };
  try {
    const response = yield call(axios, options);
    if (response) {
      yield put(bookAdd(payload));
    }
  } catch (error) {
    const message = `${error.name} ${error.message}`;
    yield put(fetchBooksError(message));
  }
}

export default function*() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
  yield takeEvery(SAGA_BOOK_SAVE, saveBook);
  yield takeEvery(SAGA_BOOK_DELETE, deleteBook);
  yield takeEvery(SAGA_BOOK_ADD, addBook);
  yield takeEvery(FETCH_GENRES_REQUEST, fetchGenres);
}
