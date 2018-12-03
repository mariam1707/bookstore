// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';

import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, unsetCurrentUserSaga } from '../../actions/auth';

import Menu from '../Menu';
import { sagaBookAdd } from '../../actions/books';
import CreateBookView from '../../components/CreateBookView';
import type { PropsType, StateType } from './types';

declare var localStorage: Object;

const mapStateToProps = state => ({
  books: state.books.books,
  genres: state.books.genres,
});

const mapDispatchToProps = {
  sagaBookAdd,
  setCurrentUser,
  unsetCurrentUserSaga,
};
export default
@compose(
  setDisplayName('SingleBookView'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
class extends React.Component<PropsType, StateType> {
  state = {
    book: {
      image:
        'https://vignette.wikia.nocookie.net/citrus/images/6/60/No_Image_Available.png/revision/latest?cb=20170129011325',
      genre: 'Tragedy',
    },
  };

  componentDidMount(): void {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(localStorage.jwtToken);
      this.props.setCurrentUser(decoded);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        this.props.unsetCurrentUserSaga();
        window.location.href = '/';
      }
    }
  }

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
        <Menu />
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
