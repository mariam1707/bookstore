// @flow
import type { User } from 'helpers/types';

export type PropsType = {
  auth: {
    isAuthenticated: boolean,
    user: { ...User },
  },
  unsetCurrentUserAction: Function,
  localeChangeAction: Function,
};
