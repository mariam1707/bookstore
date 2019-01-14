import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { push } from 'react-router-redux';
import {
  SET_CURRENT_USER_WATCHER,
  authErrorsAction,
  SUBMIT_REGISTRATION,
  setCurrentUserAction,
  UNSET_CURRENT_USER,
  SET_NEW_PASSWORD,
} from 'actions/auth';
import { fetchGenresRequest, fetchBooksRequest } from 'actions/books';
import setAuthToken from '../utils/setAuthToken';

export function* makeAuth({ payload }) {
  const opt = {
    url: 'api/users/register',
    method: 'post',
    data: payload,
  };
  try {
    const response = yield call(axios, opt);
    if (response.status === 200) {
      yield put(push('/login'));
    }
  } catch (error) {
    const message = error.response.data;
    yield put(authErrorsAction(message));
  }
}

export function* GetUser({ payload }) {
  const opt = {
    url: 'api/users/login',
    method: 'post',
    data: payload,
  };

  try {
    const response = yield call(axios, opt);
    const { token } = response.data;

    localStorage.setItem('jwtToken', token);
    Cookies.set('user', 'active', { expires: 1 });

    setAuthToken(token);
    const decoded = jwtDecode(token);
    yield put(setCurrentUserAction(decoded));
    yield put(push('/'));
  } catch (error) {
    const message = error.response.data;
    yield put(authErrorsAction(message));
  }
}

export function* LogoutUser() {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  yield put(setCurrentUserAction({}));
}

export function* RestorePass({ payload }) {
  const opt = {
    url: '/api/users/restore',
    method: 'post',
    data: payload,
  };
  try {
    yield call(axios, opt);
    yield put(push('/login'));
  } catch (error) {
    const message = error.response.data;
    yield put(authErrorsAction(message));
  }
}

export function* setUser() {
  yield put(fetchBooksRequest());
  yield put(fetchGenresRequest());
  if (Cookies.get('user')) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    yield put(setCurrentUserAction(decoded));
  }
}

export default function*() {
  // yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
  yield takeEvery(SUBMIT_REGISTRATION, makeAuth);
  yield takeEvery(SET_CURRENT_USER_WATCHER, GetUser);
  yield takeEvery(UNSET_CURRENT_USER, LogoutUser);
  yield takeEvery(SET_NEW_PASSWORD, RestorePass);
  yield takeEvery('READY', setUser);
}
