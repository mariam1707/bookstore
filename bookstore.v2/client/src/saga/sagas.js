import { fork } from 'redux-saga/effects';
import bookSaga from './bookSaga';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield fork(bookSaga);
  yield fork(authSaga);
}
