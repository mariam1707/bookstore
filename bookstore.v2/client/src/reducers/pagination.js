import { SET_CURRENT_PAGE, SET_PER_PAGE } from '../actions/pagination';

const initState = {
  currentPage: 1,
  perPage: 6,
};

export default function(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      };
    default:
      return state;
  }
}
