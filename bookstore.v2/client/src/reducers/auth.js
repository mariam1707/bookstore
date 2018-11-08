import { AUTH_ERRORS, SET_CURRENT_USER } from '../actions/auth';
import isEmpty from '../utils/isEmpty';

const initState = {
  isAuthenticated: false,
  user: {},
  errors: {},
};
export default function(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case AUTH_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
