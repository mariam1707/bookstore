import { AUTH_ERRORS } from '../actions/auth';

const initState = {
  errors: {},
};
export default function(state = initState, action) {
  switch (action.type) {
    case AUTH_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
