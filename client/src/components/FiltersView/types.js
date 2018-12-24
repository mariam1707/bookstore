// @flow
import type { Genre } from 'helpers/types';

export type PropsType = {
  genres: Array<Genre>,
  handleChangeSelect: Function,
  filterTitleValue: Function,
  filterAuthorValue: Function,
  handleChangeFilter: Function,
  selectedvalue: ?string,
};
