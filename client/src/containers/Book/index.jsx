// @flow
import * as React from 'react';
import { equals } from 'ramda';
import { compose, setDisplayName } from 'recompose';
import Book from 'components/Book';
import withShowModal from 'hocs/withShowModal';
import type { PropsType, StateType } from './types';

export default compose(
  setDisplayName('Book'),
  withShowModal
)(
  class extends React.PureComponent<PropsType, StateType> {
    static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
      if (!equals(prevState.book, nextProps.book)) {
        // console.log('GDSFP BOOK');
        return {
          book: nextProps.book,
        };
      }

      return null;
    }

    state = {
      book: {},
    };
    // shouldComponentUpdate = (nextProps, nextState) => {
    //   const { book, showModal } = this.state;
    //   // console.log('SCU BOOK');

    //   if (equals(book, nextState.book) && showModal === nextState.showModal) {
    //     return false;
    //   }
    //   return true;
    // };
    render() {
      const { book } = this.state;
      const { userType, isModal, hide, show } = this.props;
      return (
        <Book
          hide={hide}
          handleDelete={this.handleDelete}
          show={show}
          book={book}
          userType={userType}
          isModal={isModal}
        />
      );
    }
  }
);
