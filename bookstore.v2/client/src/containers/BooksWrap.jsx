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
import Pagination from './Pagination';

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.books !== nextProps.books) {
      return {
        ...prevState,
        books: Object.values(nextProps.books),
        totalPages: nextProps.totalPages,
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
    totalPages: this.props.totalPages,
    totalBooks: this.props.books.length,
    startDate: moment(),
    endDate: moment(),
  };

  componentDidMount() {
    const opt = {
      currentPage: 1,
    };
    this.props.fetchBooksRequest(opt);
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
    const opt = {
      currentPage: 1,
    };
    this.props.fetchBooksRequest(opt);
  };

  onPageChanged = data => {
    const { currentPage, totalPages } = data;

    this.setState({ currentPage, totalPages });
    const opt = {
      currentPage,
    };
    this.props.fetchBooksRequest(opt);
  };

  render() {
    const { selectedvalue, filterTitle, filterAuthor, books, totalPages, currentPage } = this.state;
    const totalBooks = books.length;
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
          <div className="row justify-content-sm-around">
            <DatePicker selected={this.state.startDate} onChange={this.handleChangeStartDate} />
            <DatePicker selected={this.state.endDate} onChange={this.handleChangeEndDate} />
            <button type="button" className="btn btn-primary" onClick={this.handleDateSubmit}>
              Показать
            </button>
            <button type="button" className="btn btn-primary" onClick={this.handleDateDelete}>
              Сбросить
            </button>

            {currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                Page <span className="font-weight-bold">{currentPage}</span> /{' '}
                <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
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
        <div className="d-flex flex-row py-4 align-items-center">
          <Pagination
            totalPages={totalPages}
            pageLimit={3}
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
    totalPages: state.books.totalPages,
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
