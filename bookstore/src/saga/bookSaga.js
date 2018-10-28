import { takeEvery, call, put, select } from 'redux-saga/effects';
import axios from "axios";

import {
    FETCH_BOOKS_REQUEST,
    fetchBooksSuccess,
    fetchBooksError
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

export default function* () {
    yield takeEvery(FETCH_BOOKS_REQUEST, fetchBooks)
}