// @flow
import { createAction } from 'redux-actions';
import type { ActionType } from 'types/action';
import type { setCurrentPageType, setPerPageType } from 'types/pagination/action';

export const SET_CURRENT_PAGE: $PropertyType<setCurrentPageType, 'type'> = 'SET_CURRENT_PAGE';
export const setCurrentPage: ActionType<
  $PropertyType<setCurrentPageType, 'type'>,
  $PropertyType<setCurrentPageType, 'payload'>
> = createAction(SET_CURRENT_PAGE);

export const SET_PER_PAGE: $PropertyType<setPerPageType, 'type'> = 'SET_PER_PAGE';
export const setPerPage: ActionType<
  $PropertyType<setPerPageType, 'type'>,
  $PropertyType<setPerPageType, 'payload'>
> = createAction(SET_PER_PAGE);
