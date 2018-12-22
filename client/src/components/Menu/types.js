// flow
import type { User } from 'helpers/types';

export type PropsType = {
  user: { ...User },
  handleLogout: Function,
  isAuthenticated: boolean,
  localeChangeAction: Function,
};
