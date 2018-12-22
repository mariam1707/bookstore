import { createAction } from 'redux-actions';
import type { ActionType } from 'types/action';
import type {
  SetCurrentUserType,
  SetCurrentUserWatcherType,
  SubmitRegistrationType,
  AuthErrorsType,
  UnsetCurrentUserType,
  SetNewPasswordType,
} from 'types/auth/action';

export const SET_CURRENT_USER: $PropertyType<SetCurrentUserType, 'type'> = 'SET_CURRENT_USER';
export const setCurrentUserAction: ActionType<
  $PropertyType<SetCurrentUserType, 'type'>,
  $PropertyType<SetCurrentUserType, 'payload'>
> = createAction(SET_CURRENT_USER);

export const SET_CURRENT_USER_WATCHER: $PropertyType<SetCurrentUserWatcherType, 'type'> =
  'SET_CURRENT_USER_WATCHER';
export const setCurrentUserWatcherAction: ActionType<
  $PropertyType<SetCurrentUserWatcherType, 'type'>,
  $PropertyType<SetCurrentUserWatcherType, 'payload'>
> = createAction(SET_CURRENT_USER_WATCHER);

export const SUBMIT_REGISTRATION: $PropertyType<SubmitRegistrationType, 'type'> =
  'SUBMIT_REGISTRATION';
export const submitRegistrationAction: ActionType<
  $PropertyType<SubmitRegistrationType, 'type'>,
  $PropertyType<SubmitRegistrationType, 'payload'>
> = createAction(SUBMIT_REGISTRATION);

export const AUTH_ERRORS: $PropertyType<AuthErrorsType, 'type'> = 'AUTH_ERRORS';
export const authErrorsAction: ActionType<
  $PropertyType<AuthErrorsType, 'type'>,
  $PropertyType<AuthErrorsType, 'payload'>
> = createAction(AUTH_ERRORS);

export const UNSET_CURRENT_USER: $PropertyType<UnsetCurrentUserType, 'type'> = 'UNSET_CURRENT_USER';
export const unsetCurrentUserAction: ActionType<
  $PropertyType<UnsetCurrentUserType, 'type'>,
  $PropertyType<UnsetCurrentUserType, 'payload'>
> = createAction(UNSET_CURRENT_USER);

export const SET_NEW_PASSWORD: $PropertyType<SetNewPasswordType, 'type'> = 'SET_NEW_PASSWORD';
export const setNewPasswordAction: ActionType<
  $PropertyType<SetNewPasswordType, 'type'>,
  $PropertyType<SetNewPasswordType, 'payload'>
> = createAction(SET_NEW_PASSWORD);
