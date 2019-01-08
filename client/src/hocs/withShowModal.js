import { compose, withState, withHandlers } from 'recompose';

const withShowModal = compose(
  withState('isModal', 'modal', false),
  withHandlers({
    show: ({ modal }) => () => modal(true),
    hide: ({ modal }) => () => modal(false),
  })
);

export default withShowModal;
