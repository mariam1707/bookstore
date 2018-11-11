import { createAction } from 'redux-actions';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_CURRENT_USER_SAGA = 'SET_CURRENT_USER_SAGA';
export const SUBMIT_REGISTRATION_SAGA = 'SUBMIT_REGISTRATION_SAGA';
export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';
export const AUTH_ERRORS = 'AUTH_ERRORS';
export const UNSET_CURRENT_USER_SAGA = 'UNSET_CURRENT_USER_SAGA';
export const SET_NEW_PASSWORD_SAGA = 'SET_NEW_PASSWORD_SAGA';

export const setCurrentUser = createAction(SET_CURRENT_USER);
export const setCurrentUserSaga = createAction(SET_CURRENT_USER_SAGA);
export const submitRegistrationSaga = createAction(SUBMIT_REGISTRATION_SAGA);
export const submitRegistration = createAction(SUBMIT_REGISTRATION);
export const authErrors = createAction(AUTH_ERRORS);
export const unsetCurrentUserSaga = createAction(UNSET_CURRENT_USER_SAGA);
export const setNewPasswordSaga = createAction(SET_NEW_PASSWORD_SAGA);
