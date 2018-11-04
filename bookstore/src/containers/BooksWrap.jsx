import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooksRequest, sagaBookDelete, fetchGenresRequest } from '../actions/books';
import Book from '../components/Book';
import Pagination from './Pagination';
import FiltersView from '../components/FiltersView';

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.books !== nextProps.books) {
      return {
        ...prevState,
        books: nextProps.books,
        currentBooks: nextProps.books,
        totalBooks: nextProps.books.length,
      };
    }
    return null;
  }

  state = {
    books: this.props.books,
    filterGenres: '',
    selectedvalue: 'None',
    filterTitle: '',
    filterAuthor: '',
    currentBooks: this.props.books,
    currentPage: null,
    totalPages: null,
    totalBooks: this.props.books.length,
  };

  componentDidMount() {
    this.props.fetchBooksRequest();
    this.props.fetchGenresRequest();
  }

  handleChangeSelect = e => {
    this.setState({
      ...this.state,
      selectedvalue: e.target.value,
    });
  };

  handleChangeFilter = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  filterGenres = book => {
    if (this.state.selectedvalue.toLowerCase() === 'none') {
      return book.genre.toLowerCase();
    }
    return book.genre.toLowerCase().includes(this.state.selectedvalue.toLowerCase());
  };

  filterTitle = book =>
    book.title
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(this.state.filterTitle.replace(/\s+/g, ''));

  filterAuthor = book =>
    book.author
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(this.state.filterAuthor.replace(/\s+/g, ''));

  onPageChanged = data => {
    const { books } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentBooks = books.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentBooks, totalPages });
  };

  render() {
    const { totalBooks, selectedvalue, filterTitle, filterAuthor, currentBooks } = this.state;
    if (totalBooks === 0) return null;

    return (
      <div className="container">
        <div className="row justify-content-sm-around">
          <FiltersView
            genres={this.props.genres}
            handleChangeSelect={this.handleChangeSelect}
            filterTitle={filterTitle}
            filterAuthor={filterAuthor}
            handleChangeFilter={this.handleChangeFilter}
            selectedvalue={selectedvalue}
          />
        </div>
        <div className="row">
          {currentBooks &&
            currentBooks
              .filter(this.filterGenres)
              .filter(this.filterTitle)
              .filter(this.filterAuthor)
              .map((book, id) => (
                <Book
                  key={book.id}
                  book={book}
                  handleDelete={this.props.sagaBookDelete}
                  arrId={id}
                />
              ))}
        </div>
        <div className="row justify-content-center">
          <Pagination
            totalRecords={totalBooks}
            pageLimit={6}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    genres: state.books.genres,
  };
}
const mapDispatchToProps = {
  fetchBooksRequest,
  sagaBookDelete,
  fetchGenresRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksWrap);
