import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  fetchBooksRequest,
  sagaBookDelete
} from '../actions/books';
import Book from '../components/Book'
import Pagination from '../components/Pagination';

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.books !== nextProps.books) {
      return {
        ...prevState,
        books: nextProps.books

      };
    }

    return null;
  }
  state = {
    books: this.props.books,
    filterGenres: '',
    selectedvalue: 'none',
    filterTitle: '',
    filterAuthor: '',
    currentBooks: [],
    currentPage: null,
    totalPages: null
  }
  componentDidMount() {
    this.props.fetchBooksRequest();
  }

  handleChangeSelect = (e) => {
    this.setState({
      ...this.state,
      selectedvalue: e.target.value.toLowerCase(),
    })
  }
  handleChangeFilter = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value.toLowerCase(),
    })
  }
  filterGenres = (book) => {
    if (this.state.selectedvalue === 'none') {
      return book.genre.toLowerCase();
    }
    return book.genre.toLowerCase().includes(this.state.selectedvalue);
  }
  filterTitle = (book) => {
    return book.title.toLowerCase().includes(this.state.filterTitle);
  }
  filterAuthor = (book) => {
    return book.author.toLowerCase().includes(this.state.filterAuthor);
  }
  onPageChanged = data => {
    const { books } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentBooks = books.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentBooks, totalPages });
  };


  render() {
    const {
      books,
      selectedvalue,
      filterTitle,
      filterAuthor,
      currentBooks,
      currentPage,
      totalPages
    } = this.state;

    const totalBooks = books.length;
    if (totalBooks === 0) return null;

    return (
      <div className="container">
        <div className="row">
          <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <h2>
                <strong className="text-secondary">{totalBooks}</strong>{" "}
                Books
              </h2>
              {currentPage && (
                <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                  Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                  <span className="font-weight-bold">{totalPages}</span>
                </span>
              )}
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination
                totalRecords={totalBooks}
                pageLimit={6}
                pageNeighbours={1}
                onPageChanged={this.onPageChanged}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Genres</label>
            <select className="form-control" value={selectedvalue} onChange={this.handleChangeSelect}>
              {this.props.genres && this.props.genres.map((genre, id) => (
                <option key={id}> {genre} </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Фильтр по названию книги</label>
            <input type="text" className="form-control" name="filterTitle" value={filterTitle} onChange={this.handleChangeFilter} />
          </div>
          <div className="form-group">
            <label>Фильтр по названию автора</label>
            <input type="text" className="form-control" name="filterAuthor" value={filterAuthor} onChange={this.handleChangeFilter} />
          </div>
        </div>
        <div className="row">
          {console.log(currentBooks)}
          {currentBooks && currentBooks.filter(this.filterGenres).filter(this.filterTitle).filter(this.filterAuthor).map((book, id) => (
            <Book key={id} book={book} handleDelete={this.props.sagaBookDelete} arrId={id} />
          ))}

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books.books,
    genres: state.books.genres,
  });
}
const mapDispatchToProps = {
  fetchBooksRequest,
  sagaBookDelete
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksWrap);
