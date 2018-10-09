import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Switch,BrowserRouter, Route} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import musicSaga from './saga/musicSaga';

import reducer from './reducers'

import App from './containers/App';
import TrackView from './components/TrackView';
import TrackPage from './containers/TrackPage';

import './style/app.css';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(sagaMiddleware));
sagaMiddleware.run(musicSaga);

ReactDOM.render(
        <Provider store={store}>
            <div>
            <BrowserRouter>
                    <Switch>        
                        <Route exact path='/' component={App}/>  
                        <Route path='/trackpage/:id' component={TrackPage}/>    
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>,
        document.getElementById('root')
    );

