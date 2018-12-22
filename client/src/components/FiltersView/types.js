// flow
import type { Genre } from 'helpers/types';

export type PropsType = {
  genres: Array<Genre>,
  handleChangeSelect: Function,
  filterTitle: Function,
  filterAuthor: Function,
  handleChangeFilter: Function,
  selectedvalue: ?string,
};
