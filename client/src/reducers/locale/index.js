// @flow
import { handleActions } from 'redux-actions';
import Cookie from 'js-cookie';

import { LOCALE_CHANGE } from 'actions/locale';
import { EN } from 'constants/locale';
import type { StateType, ActionType } from './types';

const defaultState: StateType = Cookie.get('locale') || EN;

export default handleActions<StateType, ActionType>(
  {
    [LOCALE_CHANGE]: (state, action) => {
      Cookie.set('locale', action.payload);

      return action.payload;
    },
  },
  defaultState
);
