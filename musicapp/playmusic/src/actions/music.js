import {
    createAction
} from 'redux-actions';

export const FETCH_MUSIC_REQUEST = 'FETCH_MUSIC_REQUEST';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_ERROR = 'FETCH_MUSIC_ERROR';
export const FETCH_MUSIC_UPDATE = 'FETCH_MUSIC_UPDATE';
export const FETCH_MUSIC_UPDATE_SAGA = 'FETCH_MUSIC_UPDATE_SAGA';


export const fetchMusicRequest = createAction(FETCH_MUSIC_REQUEST);
export const fetchMusicSuccess = createAction(FETCH_MUSIC_SUCCESS);
export const fetchMusicError = createAction(FETCH_MUSIC_ERROR);
export const fetchMusicUpdate = createAction(FETCH_MUSIC_UPDATE);
export const fetchMusicUpdateSaga = createAction(FETCH_MUSIC_UPDATE_SAGA);