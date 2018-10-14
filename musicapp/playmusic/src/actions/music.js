import {
    createAction
} from 'redux-actions';

export const FETCH_MUSIC_REQUEST = 'FETCH_MUSIC_REQUEST';
export const FETCH_MUSIC_SUCCESS = 'FETCH_MUSIC_SUCCESS';
export const FETCH_MUSIC_ERROR = 'FETCH_MUSIC_ERROR';
export const FETCH_MUSIC_UPDATE = 'FETCH_MUSIC_UPDATE';
export const FETCH_MUSIC_UPDATE_SAGA = 'FETCH_MUSIC_UPDATE_SAGA';
export const FETCH_MUSIC_ADD_SAGA = 'FETCH_MUSIC_ADD_SAGA';
export const FETCH_MUSIC_ADD = 'FETCH_MUSIC_ADD';
export const FETCH_MUSIC_DELETE = 'FETCH_MUSIC_DELETE';
export const FETCH_MUSIC_UPDATE_ARTIST_NAME_SAGA = 'FETCH_MUSIC_UPDATE_ARTIST_NAME_SAGA ';
export const FETCH_MUSIC_UPDATE_ALBUM_NAME_SAGA = 'FETCH_MUSIC_UPDATE_ALBUM_NAME_SAGA ';
export const FETCH_MUSIC_UPDATE_SONGS_SAGA = 'FETCH_MUSIC_UPDATE_SONGS_SAGA ';


export const fetchMusicRequest = createAction(FETCH_MUSIC_REQUEST);
export const fetchMusicSuccess = createAction(FETCH_MUSIC_SUCCESS);
export const fetchMusicError = createAction(FETCH_MUSIC_ERROR);
export const fetchMusicUpdate = createAction(FETCH_MUSIC_UPDATE);
export const fetchMusicUpdateSaga = createAction(FETCH_MUSIC_UPDATE_SAGA);
export const fetchMusicAddSaga = createAction(FETCH_MUSIC_ADD_SAGA);
export const fetchMusicAdd = createAction(FETCH_MUSIC_ADD);
export const fetchMusicDelete = createAction(FETCH_MUSIC_DELETE);
export const fetchMusicUpdateArtistNameSaga = createAction(FETCH_MUSIC_UPDATE_ARTIST_NAME_SAGA);
export const fetchMusicUpdateAlbumNameSaga = createAction(FETCH_MUSIC_UPDATE_ALBUM_NAME_SAGA);
export const fetchMusicUpdateSongsSaga = createAction(FETCH_MUSIC_UPDATE_SONGS_SAGA);
