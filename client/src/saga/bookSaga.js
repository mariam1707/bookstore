import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  bookUpdate,
  fetchGenresSuccess,
  setDateFilter,
  FETCH_BOOKS_REQUEST,
  BOOK_UPDATE_WATCHER,
  BOOK_DELETE_WATCHER,
  BOOK_ADD_WATCHER,
  FETCH_GENRES_REQUEST,
  SET_DATE_FILTER_WATCHER,
} from 'actions/books';
import { getPagination } from './selectors';

export function* fetchBooks() {
  const options = {
    url: 'api/books',
    method: 'get',
  };

  try {
    const response = yield call(axios, options);
    const { books } = response.data.books.reduce(
      (acc, curr) => {
        acc.books[curr._id] = curr;
        return acc;
      },
      { books: {} }
    );

    yield put(fetchBooksSuccess(books));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}
export function* fetchGenres() {
  const options = {
    url: 'api/genres',
    method: 'get',
  };

  try {
    const response = yield call(axios, options);

    yield put(fetchGenresSuccess(response.data));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}

export function* updateBook({ payload }) {
  const options = {
    url: `api/books/${payload._id}`,
    method: 'patch',
    data: {
      author: payload.author,
      title: payload.title,
      price: payload.price,
      genre: payload.genre,
      image: payload.image,
    },
  };

  try {
    yield call(axios, options);

    const {
      books: { books },
    } = yield select(state => state);

    const newBooks = { ...books };
    newBooks[payload._id] = payload;
    yield put(bookUpdate(newBooks));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}
export function* deleteBook({ payload }) {
  const options = {
    url: `api/books/${payload}`,
    method: 'delete',
  };

  try {
    yield call(axios, options);
    yield put(fetchBooksRequest());
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}
export function* addBook({ payload }) {
  const options = {
    url: 'api/books/',
    method: 'post',
    data: payload,
  };

  try {
    yield call(axios, options);
    yield put(fetchBooksRequest());
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}

export function* setFilterDate({ payload }) {
  const { currentPage, perPage } = yield select(getPagination);

  const opt = {
    url: 'api/books/filter_date',
    method: 'get',
    params: {
      currentPage,
      perPage,
      start: payload.start._d,
      end: payload.end._d,
    },
  };

  try {
    const response = yield call(axios, opt);

    const { books } = response.data.books.reduce(
      (acc, curr) => {
        acc.books[curr._id] = curr;
        return acc;
      },
      { books: {} }
    );

    const data = {
      books,
      totalPages: response.data.pages,
    };
    yield put(setDateFilter(data));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}

export default function*() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
  yield takeEvery(BOOK_UPDATE_WATCHER, updateBook);
  yield takeEvery(BOOK_DELETE_WATCHER, deleteBook);
  yield takeEvery(BOOK_ADD_WATCHER, addBook);
  yield takeEvery(FETCH_GENRES_REQUEST, fetchGenres);
  yield takeEvery(SET_DATE_FILTER_WATCHER, setFilterDate);
}
