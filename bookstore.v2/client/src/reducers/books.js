import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  BOOK_UPDATE,
  BOOK_DELETE,
  BOOK_SET_GENRES,
  BOOK_ADD,
  FETCH_GENRES_SUCCESS,
} from '../actions/books';

const initState = {
  books: {},
  error: '',
  genres: [],
};
export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case BOOK_UPDATE:
      return {
        ...state,
        books: action.payload,
      };
    case BOOK_DELETE:
      return {
        ...state,
        books: action.payload,
      };
    case BOOK_SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case BOOK_ADD:
      return {
        ...state,
        books: action.payload,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: [...action.payload],
      };
    default:
      return state;
  }
}
