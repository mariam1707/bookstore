import {
    FETCH_MUSIC_SUCCESS,
    FETCH_MUSIC_ERROR,
    FETCH_MUSIC_UPDATE,
    FETCH_MUSIC_ADD,
    FETCH_MUSIC_DELETE
} from '../actions/music';

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
            };
        case FETCH_MUSIC_UPDATE:
            return {
                ...state,
                music: action.payload
            };
        case FETCH_MUSIC_ADD:
            return {
                ...state,
                music: [ ...state.music, action.payload ]
            };
        case FETCH_MUSIC_DELETE:
            return {
                ...state,
                music: [ ...state.music.slice(0, action.payload.arrid), ...state.music.slice(action.payload.arrid + 1) ]
            };
        default:
            return state;
    }
}
