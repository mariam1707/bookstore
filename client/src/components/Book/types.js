import type { Book } from 'helpers/types';

export type PropsType = {
  key: number,
  book: { ...Book },
  handleDelete: Function,
  userType: string,
  showModal: boolean,
  book: { ...Book },
};
