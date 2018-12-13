export type SetCurrentUserType = {
  type: 'SET_CURRENT_USER',
  payload: Object,
};

export type SetCurrentUserWatcherType = {
  type: 'SET_CURRENT_USER_WATCHER',
  payload: Object,
};

export type SubmitRegistrationType = {
  type: 'SUBMIT_REGISTRATION',
  payload: Object,
};

export type AuthErrorsType = {
  type: 'AUTH_ERRORS',
  payload: Object,
};

export type UnsetCurrentUserType = {
  type: 'UNSET_CURRENT_USER_SAGA',
  payload: null,
};

export type SetNewPasswordType = {
  type: 'SET_NEW_PASSWORD',
  payload: Object,
};
