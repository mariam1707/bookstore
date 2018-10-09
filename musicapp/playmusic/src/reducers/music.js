import {
    FETCH_MUSIC_SUCCESS,
    FETCH_MUSIC_ERROR,
    FETCH_MUSIC_UPDATE
} from '../actions/music'

const initialState = {
    music: '',
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MUSIC_SUCCESS:
            return {
                ...state,
                music: action.payload
            };
        case FETCH_MUSIC_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FETCH_MUSIC_UPDATE:
            return {
                ...state,
                music: action.payload
            }
        default:
            return state;
    }
}