// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import Menu from 'containers/Menu';
import { sagaBookAdd } from 'actions/books';
import CreateBookView from 'components/CreateBookView';
import type { PropsType, StateType } from './types';

const mapStateToProps = state => ({
  books: state.books.books,
  genres: state.books.genres,
});

const mapDispatchToProps = {
  sagaBookAdd,
};

class SingleBookCreateView extends React.Component<PropsType, StateType> {
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
    const { sagaBookAdd } = this.props;
    const { book } = this.state;
    sagaBookAdd(book);
  };

  render() {
    const { book } = this.state;
    const { genres } = this.props;
    return (
      <>
        <Menu unsetCurrentUserSaga={this.props.unsetCurrentUserSaga} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookCreateView);
