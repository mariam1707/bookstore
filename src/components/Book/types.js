import type { Book } from 'helpers/types';

export type PropsType = {
  key: number,
  book: { ...Book },
  hide: Function,
  show: Function,
  handleDelete: Function,
  userType: string,
  isModal: boolean,
  book: { ...Book },
};
