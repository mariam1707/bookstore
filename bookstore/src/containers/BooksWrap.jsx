import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  fetchBooksRequest,
  sagaBookDelete
} from '../actions/books';
import Book from '../components/Book'

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    if (prevState.books !== nextProps.books) {
      console.log(prevState.books, nextProps.books);
      return {
        books: nextProps.books
      };
    }

    return null;
  }
  state = {
    books: this.props.books,
  }
  componentDidMount() {
    this.props.fetchBooksRequest();
  }

  render() {
    const { books } = this.state;
    return (
      <div className="container">
        <div className="row">
          {books && books.map((book, id) => (
            <Book key={id} book={book} handleDelete={this.props.sagaBookDelete} arrId={id} />
          ))}

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
  sagaBookDelete
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksWrap);
