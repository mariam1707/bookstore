// @flow
import type { User } from 'helpers/types';

export type PropsType = {
  auth: {
    isAuthenticated: boolean,
    user: { ...User },
    errors: Object,
  },
  setNewPasswordAction: Function,
};

export type StateType = {
  email: string,
  newPassword: string,
  errors: Object,
};
