import {
    takeEvery,
    call,
    put,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_MUSIC_REQUEST,
    fetchMusicError,
    fetchMusicSuccess,
    FETCH_MUSIC_ADD_SAGA,
    fetchMusicAdd,
    FETCH_MUSIC_DELETE,
    FETCH_MUSIC_UPDATE_SAGA
} from '../actions/music';


export function* MusicRequest() {
    // const options = {
    //     url: 'https://api.myjson.com/bins/1c52x4',
    //     method: 'get',
    // };
    const options = {
        url   : 'http://localhost:3000/music',
        method: 'get',
    };
    try {
        const response = yield call(axios, options);
        yield put(fetchMusicSuccess(response.data));
    } catch (error) {
        const message = `${ error.name } ${ error.message }`;
        yield put(fetchMusicError(message));
    }
}

export function* MusicAdd({ payload }) {
    try {
        const options = {
            url   : 'http://localhost:3000/music',
            method: 'post',
            data  : payload
        };
        yield call(axios, options);
        yield put(fetchMusicAdd(payload));
    } catch (error) {
        const message = `${ error.name } ${ error.message }`;
        yield put(fetchMusicError(message));
    }
}
export function* ArtistDelete({ payload }) {
    try {
        const options = {
            method: 'delete',
            url   : `http://localhost:3000/music/${ payload.trackid }`,

        };
        yield call(axios, options);
    } catch (error) {
        const message = `${ error.name } ${ error.message }`;
        yield put(fetchMusicError(message));
    }
}
export function* MusicUpdate({ payload }) {
    const options = {
        method: 'patch',
        url   : `http://localhost:3000/music/${ payload.id }`,
        data  : {
            name: payload.name,
        }
    };
    try {
        yield call(axios, options);
    } catch (error) {
        console.log(error.message);
    }
}

// export function* MusicUpdate({
//     payload
// }) {
//     const {
//         music: {
//             music
//         }
//     }            = yield select(state => state);
//     const tracks = JSON.parse(JSON.stringify(music));

//     //  music: [ ...state.music.slice(0, action.payload.id), ...action.payload.newArr, ...state.music.slice(action.payload.id + 1) ];
//     console.log(tracks);

//     const options = {};
//     try {

//     } catch (error) {
//         console.log(error.message);
//     }
// }

export default function* () {
    yield takeEvery(FETCH_MUSIC_REQUEST, MusicRequest);
    yield takeEvery(FETCH_MUSIC_ADD_SAGA, MusicAdd);
    yield takeEvery(FETCH_MUSIC_DELETE, ArtistDelete);
    yield takeEvery(FETCH_MUSIC_UPDATE_SAGA, MusicUpdate);
}
