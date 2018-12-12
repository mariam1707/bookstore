import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { push } from 'connected-react-router';
import setAuthToken from '../utils/setAuthToken';
import {
  SET_CURRENT_USER_SAGA,
  authErrors,
  SUBMIT_REGISTRATION_SAGA,
  setCurrentUser,
  UNSET_CURRENT_USER_SAGA,
  SET_NEW_PASSWORD_SAGA,
} from '../actions/auth';

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
    yield put(authErrors(message));
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
    setAuthToken(token);
    const decoded = jwtDecode(token);
    yield put(setCurrentUser(decoded));
    yield put(push('/'));
  } catch (error) {
    const message = error.response.data;
    yield put(authErrors(message));
  }
}

export function* LogoutUser() {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  yield put(setCurrentUser({}));
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
    yield put(authErrors(message));
  }
}

export function* setUser() {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwtDecode(localStorage.jwtToken);
    yield put(setCurrentUser(decoded));

    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //   yield put(unsetCurrentUserSaga);
    //   window.location.href = '/';
    // }
  }
}

export default function*() {
  // yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
  yield takeEvery(SUBMIT_REGISTRATION_SAGA, makeAuth);
  yield takeEvery(SET_CURRENT_USER_SAGA, GetUser);
  yield takeEvery(UNSET_CURRENT_USER_SAGA, LogoutUser);
  yield takeEvery(SET_NEW_PASSWORD_SAGA, RestorePass);
  yield takeEvery('READY', setUser);
}
