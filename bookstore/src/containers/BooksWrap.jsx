import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  fetchBooksRequest,
  sagaBookDelete
} from '../actions/books';
import Book from '../components/Book'

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

  render() {
    const { books, selectedvalue, filterTitle, filterAuthor } = this.state;
    return (
      <div className="container">
        {console.log(filterTitle)}
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
          {books && books.filter(this.filterGenres).filter(this.filterTitle).filter(this.filterAuthor).map((book, id) => (
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
