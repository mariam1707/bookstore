import { takeEvery, call, put } from 'redux-saga/effects';
import axios from "axios";

import {
    FETCH_BOOKS_REQUEST,
    fetchBooksSuccess,
    fetchBooksError,
    SAGA_BOOK_SAVE,
    bookSave,
} from '../actions/books';

export function* fetchBooks() {
    let options = {
        url: 'http://localhost:3001/books',
        method: 'get'
    };
    try {
        const response = yield call(axios, options);
        yield put(fetchBooksSuccess(response.data));
    } catch (error) {
        const message = error.name + ' ' + error.message;
        yield put(fetchBooksError(message));
    }
}

export function* saveBook({ payload }) {
    console.log(payload);
    let options = {
        url: `http://localhost:3001/books/${payload.id}`,
        method: 'patch',
        data: {
            ...payload
        }
    }
    try {
        let response = yield call(axios, options);
        if (response) {
            yield put(bookSave(payload))
        }
    } catch (error) {
        const message = error.name + ' ' + error.message;
        yield put(fetchBooksError(message));
    }
}

export default function* () {
    yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks);
    yield takeEvery(SAGA_BOOK_SAVE, saveBook);
}