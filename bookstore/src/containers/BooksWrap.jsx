import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  fetchBooksRequest,
} from '../actions/books';
import Book from '../components/Book'
class BooksWrap extends Component {
  componentDidMount() {
    this.props.fetchBooksRequest();
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books.books
  });
}
const mapDispatchToProps = {
  fetchBooksRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksWrap);
