import { createAction } from 'redux-actions';

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SAGA = 'SUBMIT_LOGIN_SAGA';
export const SUBMIT_REGISTRATION_SAGA = 'SUBMIT_REGISTRATION_SAGA';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const AUTH_ERRORS = 'AUTH_ERRORS';

export const submitLogin = createAction(SUBMIT_LOGIN);
export const submitLoginSaga = createAction(SUBMIT_LOGIN_SAGA);
export const submitRegistrationSaga = createAction(SUBMIT_REGISTRATION_SAGA);
export const submitRegistration = createAction(SUBMIT_REGISTRATION);
export const authErrors = createAction(AUTH_ERRORS);
