import {
    takeEvery,
    call,
    put,
    select
} from 'redux-saga/effects';
import axios from "axios";

import {
    FETCH_MUSIC_REQUEST,
    fetchMusicError,
    fetchMusicSuccess,
    fetchMusicUpdate,
    FETCH_MUSIC_UPDATE_SAGA
} from '../actions/music';



export function* MusicRequest() {
    // const options = {
    //     url: 'https://api.myjson.com/bins/1c52x4',
    //     method: 'get',
    // };
    const options = {
        url: 'http://localhost:3000/music',
        method: 'get',
    }
    try {
        const response = yield call(axios, options);
        console.log(response);
        yield put(fetchMusicSuccess(response.data));
    } catch (error) {
        const message = error.name + ' ' + error.message;
        yield put(fetchMusicError(message));
    }

}
export function* MusicUpdate({
    payload
}) {
    console.log(payload);
    const {
        music: {
            music
        }
    } = yield select(state => state);
    const tracks = JSON.parse(JSON.stringify(music));

    //  music: [ ...state.music.slice(0, action.payload.id), ...action.payload.newArr, ...state.music.slice(action.payload.id + 1) ];
    console.log(tracks);

    const options = {}
    try {

    } catch (error) {
        console.log(error.message);
    }
}

export default function* () {
    yield takeEvery(FETCH_MUSIC_REQUEST, MusicRequest);
    yield takeEvery(FETCH_MUSIC_UPDATE_SAGA, MusicUpdate)
}