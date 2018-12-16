// @flow
import { createAction } from 'redux-actions';

import type { ActionType } from 'types/action';
import type { LocaleChangeType } from 'types/locale/action';

export const LOCALE_CHANGE: $PropertyType<LocaleChangeType, 'type'> = 'LOCALE_CHANGE';
export const localeChangeAction: ActionType<
  $PropertyType<LocaleChangeType, 'type'>,
  $PropertyType<LocaleChangeType, 'payload'>
> = createAction(LOCALE_CHANGE);
