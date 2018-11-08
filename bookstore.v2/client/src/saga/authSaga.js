import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {
  SET_CURRENT_USER_SAGA,
  authErrors,
  SUBMIT_REGISTRATION_SAGA,
  setCurrentUser,
} from '../actions/auth';

export function* makeAuth(payload) {
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

export function* GetUser({ payload }) {
  const opt = {
    url: 'api/users/login',
    method: 'post',
    data: payload,
  };
  try {
    const response = yield call(axios, opt);
    console.log(response);
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    yield put(setCurrentUser(decoded));
  } catch (error) {
    const message = error.response.data;
    yield put(authErrors(message));
  }
}

export default function*() {
  // yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
  yield takeEvery(SUBMIT_REGISTRATION_SAGA, makeAuth);
  yield takeEvery(SET_CURRENT_USER_SAGA, GetUser);
}
