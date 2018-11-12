import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  fetchBooksRequest,
  sagaBookDelete,
  fetchGenresRequest,
  setDateFilterSaga,
} from '../actions/books';
import Book from '../components/Book';
import FiltersView from '../components/FiltersView';

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.books !== nextProps.books) {
      return {
        ...prevState,
        books: Object.values(nextProps.books),
      };
    }
    return null;
  }

  state = {
    books: Object.values(this.props.books),
    filterGenres: '',
    selectedvalue: 'None',
    filterTitle: '',
    filterAuthor: '',
    currentBooks: this.props.books,
    currentPage: null,
    totalPages: null,
    totalBooks: this.props.books.length,
    startDate: moment(),
    endDate: moment(),
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

  handleChangeStartDate = date => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date,
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

  handleDateSubmit = () => {
    const { startDate, endDate } = this.state;
    const filterDate = {
      start: startDate,
      end: endDate,
    };
    this.props.setDateFilterSaga(filterDate);
  };

  handleDateDelete = () => {
    this.props.fetchBooksRequest();
  };

  // onPageChanged = data => {
  //   const { books } = this.state;
  //   const { currentPage, totalPages, pageLimit } = data;
  //   const offset = (currentPage - 1) * pageLimit;
  //   const currentBooks = books.slice(offset, offset + pageLimit);
  //   this.setState({ currentPage, currentBooks, totalPages });
  // };

  render() {
    const { selectedvalue, filterTitle, filterAuthor, books } = this.state;
    // if (totalBooks === 0) return null;
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
          <div className="row justify-content-sm-around">
            <DatePicker selected={this.state.startDate} onChange={this.handleChangeStartDate} />
            <DatePicker selected={this.state.endDate} onChange={this.handleChangeEndDate} />
            <button type="button" className="btn btn-primary" onClick={this.handleDateSubmit}>
              Показать
            </button>
            <button type="button" className="btn btn-primary" onClick={this.handleDateDelete}>
              Сбросить
            </button>
          </div>
        </div>
        <div className="row">
          {books &&
            books
              .filter(this.filterGenres)
              .filter(this.filterTitle)
              .filter(this.filterAuthor)
              .map(book => (
                <Book
                  key={book._id}
                  book={book}
                  handleDelete={this.props.sagaBookDelete}
                  user_type={this.props.user_type}
                />
              ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books,
    genres: state.books.genres,
    user_type: state.auth.user.user_type,
  };
}
const mapDispatchToProps = {
  fetchBooksRequest,
  sagaBookDelete,
  fetchGenresRequest,
  setDateFilterSaga,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksWrap);
