// flow
import { User } from 'helpers/types';

export type PropsType = {
  auth: {
    isAuthenticated: boolean,
    user: { ...User },
    errors: Object,
  },
  setCurrentUserWatcherAction: Function,
};

export type StateType = {
  email: string,
  password: string,
  errors: Object,
};
