import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import createSagaMiddleware             from 'redux-saga';

import musicSaga                        from './saga/musicSaga';

import reducer                          from './reducers';

import App                              from './containers/App';
import TrackPage                        from './containers/TrackPage';
import AddNewArtistPage                 from './containers/AddNewArtistPage';
import EditTrackPage                    from './containers/EditTrackPage';

import './style/app.css';


const sagaMiddleware                        = createSagaMiddleware();
const store                                 = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware));
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
sagaMiddleware.run(musicSaga);

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route path='/trackpage/:id' component={ TrackPage } />
                    <Route path='/addnewartist' component={ AddNewArtistPage } />
                    <Route path='/edittrack/:id' component={ EditTrackPage } />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root')
);
