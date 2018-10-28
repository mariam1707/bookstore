import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import BooksSaga from './saga/bookSaga';
import App from './App';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
// sagaMiddleware.run(BooksSaga);
// applyMiddleware(sagaMiddleware)
ReactDOM.render(
    <Provider store={store}>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);
