import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_BOOKS_REQUEST,
  fetchBooksSuccess,
  fetchBooksError,
  SAGA_BOOK_UPDATE,
  bookUpdate,
  SAGA_BOOK_DELETE,
  bookDelete,
  // bookSetGenres,
  SAGA_BOOK_ADD,
  bookAdd,
  FETCH_GENRES_REQUEST,
  fetchGenresSuccess,
  SET_DATE_FILTER_SAGA,
  setDateFilter,
} from '../actions/books';

export function* fetchBooks({ payload }) {
  const options = {
    url: 'api/books',
    method: 'get',
    params: {
      pageNo: payload.currentPage > 0 ? payload.currentPage : 1,
      size: payload.size || 6,
    },
  };
  try {
    const response = yield call(axios, options);
    const { books } = response.data.message.reduce(
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
    yield put(fetchBooksSuccess(data));
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

    const {
      books: { books },
    } = yield select(state => state);
    const newBooks = { ...books };
    delete newBooks[payload];
    yield put(bookDelete(newBooks));
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
    const response = yield call(axios, options);
    const {
      books: { books },
    } = yield select(state => state);
    const newBooks = { ...books };
    newBooks[response.data._id] = response.data;
    yield put(bookAdd(newBooks));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}

export function* setFilterDate({ payload }) {
  const opt = {
    url: 'api/books/filter_date',
    method: 'get',
    params: {
      start: payload.start._d,
      end: payload.end._d,
    },
  };
  try {
    const response = yield call(axios, opt);
    const { books } = response.data.reduce(
      (acc, curr) => {
        acc.books[curr._id] = curr;
        return acc;
      },
      { books: {} }
    );
    yield put(setDateFilter(books));
  } catch (error) {
    const message = error.response.data;
    yield put(fetchBooksError(message));
  }
}

export default function*() {
  yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
  yield takeEvery(SAGA_BOOK_UPDATE, updateBook);
  yield takeEvery(SAGA_BOOK_DELETE, deleteBook);
  yield takeEvery(SAGA_BOOK_ADD, addBook);
  yield takeEvery(FETCH_GENRES_REQUEST, fetchGenres);
  yield takeEvery(SET_DATE_FILTER_SAGA, setFilterDate);
}
