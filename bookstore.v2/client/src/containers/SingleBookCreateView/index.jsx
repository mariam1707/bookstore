import React, { Component } from 'react';
import { connect } from 'react-redux';

import jwtDecode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, unsetCurrentUserSaga } from '../../actions/auth';

import Menu from '../Menu';
import { sagaBookAdd } from '../../actions/books';
import CreateBookView from '../../components/CreateBookView';

class SingleBookView extends Component {
  state = {
    book: {
      image:
        'https://vignette.wikia.nocookie.net/citrus/images/6/60/No_Image_Available.png/revision/latest?cb=20170129011325',
      genre: 'Tragedy',
    },
  };

  componentDidMount() {
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

  handleChange = e =>
    this.setState({
      ...this.state,
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value,
      },
    });

  handleChangeSelect = e =>
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

const mapStateToProps = state => ({
  books: state.books.books,
  genres: state.books.genres,
});

const mapDispatchToProps = {
  sagaBookAdd,
  setCurrentUser,
  unsetCurrentUserSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookView);
