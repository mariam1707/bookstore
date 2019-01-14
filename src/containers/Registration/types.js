// @flow

export type PropsType = {
  errors: Object,
  submitRegistrationAction: Function,
  history: Object,
};

export type StateType = {
  email: string,
  name: string,
  password: string,
  password2: string,
  errors: Object,
};
