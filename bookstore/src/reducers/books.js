import {
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR,
    BOOK_SAVE,
    BOOK_DELETE,
    BOOK_SET_GENRES
} from '../actions/books';

const initState = {
    books: [],
    message: '',
    genres: [],
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
        case BOOK_SAVE:
            return {
                ...state,
                books: [
                    ...state.books.slice(0, action.payload.id),
                    action.payload,
                    ...state.books.slice(action.payload.id + 1)
                ]
            }
        case BOOK_DELETE:
            return {
                ...state,
                books: [
                    ...state.books.slice(0, action.payload),
                    ...state.books.slice(action.payload + 1),
                ]
            }
        case BOOK_SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}
