import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import history from './history';

import reducer from './reducers';
import rootSaga from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer(history),
  composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(rootSaga);

export default store;
