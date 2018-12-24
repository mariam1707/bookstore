// @flow
import type { Genres } from 'helpers/types';

export type PropsType = {
  genres: Array<Genres>,
  handleChangeSelect: Function,
  filterTitleValue: string,
  filterAuthorValue: string,
  handleChangeFilter: Function,
  selectedValue: string,
};
