import { createAction } from 'redux-actions';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_PER_PAGE = 'SET_PER_PAGE';

export const setCurrentPage = createAction(SET_CURRENT_PAGE);
export const setPerPage = createAction(SET_PER_PAGE);
