// @flow
import * as React from 'react';
import { equals } from 'ramda';

import Book from 'components/Book';
import type { PropsType, StateType } from './types';

class BookContainer extends React.Component<PropsType, StateType> {
  static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
    if (!equals(prevState.book, nextProps.book)) {
      console.log('GDSFP BOOK');
      return {
        book: nextProps.book,
      };
    }

    return null;
  }

  state = {
    book: {},
    showModal: false,
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { book, showModal } = this.state;
    console.log('SCU BOOK');

    if (equals(book, nextState.book) && showModal === nextState.showModal) {
      return false;
    }
    return true;
  };

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleDelete = () => {
    const { book } = this.state;
    this.props.handleDelete(book._id);
  };

  render() {
    const { book, showModal } = this.state;
    const { userType } = this.props;
    return (
      <Book
        handleClose={this.handleClose}
        handleDelete={this.handleDelete}
        handleShow={this.handleShow}
        book={book}
        userType={userType}
        showModal={showModal}
      />
    );
  }
}

export default BookContainer;
