import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { SUBMIT_LOGIN_SAGA } from '../actions/auth';

export function* getLogin() {
  try {
  } catch (error) {}
}

export default function*() {
  yield takeEvery(SUBMIT_LOGIN_SAGA, getLogin);
}
