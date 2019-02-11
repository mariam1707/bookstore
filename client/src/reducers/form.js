import { SET_FORM_ERROR } from 'actions/forms';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_FORM_ERROR:
      return {
        [action.payload.form]: {
          ...action.payload.error,
        },
      };
    default:
      return state;
  }
};
