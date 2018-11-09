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

export default function*() {
  // yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
  yield takeEvery(SUBMIT_REGISTRATION_SAGA, makeAuth);
  yield takeEvery(SET_CURRENT_USER_SAGA, GetUser);
  yield takeEvery(UNSET_CURRENT_USER_SAGA, LogoutUser);
}
