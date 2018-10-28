import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
} from '../actions/books';

const initState = {
    books: [],
    message: ''
}
export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload
            };
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}
