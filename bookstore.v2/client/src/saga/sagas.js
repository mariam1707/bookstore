// flow
import { fork, put } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import bookSaga from './bookSaga';
import authSaga from './authSaga';

export default function*(): Saga<void> {
  yield fork(bookSaga);
  yield fork(authSaga);

  yield put({ type: 'READY' });
}
