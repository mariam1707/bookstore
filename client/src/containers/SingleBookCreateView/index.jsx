// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { bookAddWatcher } from 'actions/books';
import CreateBookView from 'components/CreateBookView';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import type { PropsType, StateType } from './types';

const mapStateToProps = state => ({
  books: state.books.books,
  genres: state.books.genres,
});

const mapDispatchToProps = {
  bookAddWatcher,
};
export default compose(
  setDisplayName('SingleBookCreateContainer'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(
  class extends React.Component<PropsType, StateType> {
    state = {
      book: {
        image:
          'https://vignette.wikia.nocookie.net/citrus/images/6/60/No_Image_Available.png/revision/latest?cb=20170129011325',
        genre: 'Tragedy',
      },
    };

    handleChange = (e: SyntheticInputEvent<>) => {
      this.setState({
        ...this.state,
        book: {
          ...this.state.book,
          [e.target.name]: e.target.value,
        },
      });
    };

    handleChangeSelect = (e: SyntheticInputEvent<>) =>
      this.setState({
        ...this.state,
        book: {
          ...this.state.book,
          genre: e.target.value,
        },
      });

    handleSave = () => {
      const { bookAddWatcher } = this.props;
      const { book } = this.state;
      bookAddWatcher(book);
    };

    render() {
      const { book } = this.state;
      const { genres } = this.props;
      return (
        <>
          <div className="container">
            <CreateBookView
              book={book}
              genres={genres}
              handleSave={this.handleSave}
              handleChangeSelect={this.handleChangeSelect}
              handleChange={this.handleChange}
            />
          </div>
        </>
      );
    }
  }
);
