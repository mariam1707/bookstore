import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../Menu';
import { sagaBookAdd } from '../../actions/books';

class SingleBookView extends Component {
  state = {};

  render() {
    return (
      <>
        <Menu />
        <div className="container" />
      </>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books,
});

const mapDispatchToProps = {
  sagaBookAdd,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookView);
