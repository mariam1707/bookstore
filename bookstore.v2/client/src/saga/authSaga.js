import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { SUBMIT_LOGIN_SAGA, authErrors, SUBMIT_REGISTRATION_SAGA } from '../actions/auth';

export function* makeAuth({ payload }) {
  const opt = {
    url: 'api/users/register',
    method: 'post',
    data: payload,
  };
  try {
    const response = yield call(axios, opt);
    console.log(response);
  } catch (error) {
    const message = error.response.data;
    yield put(authErrors(message));
  }
}

export function* getLogin({ payload }) {
  const opt = {
    url: 'api/users/login',
    method: 'post',
    data: payload,
  };
  try {
    const response = yield call(axios, opt);
    console.log(response);
  } catch (error) {
    const message = error.response.data;
    yield put(authErrors(message));
  }
}

export default function*() {
  // yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
  yield takeEvery(SUBMIT_REGISTRATION_SAGA, makeAuth);
  yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
}
