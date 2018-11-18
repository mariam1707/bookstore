import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  fetchBooksRequest,
  sagaBookDelete,
  fetchGenresRequest,
  setDateFilterSaga,
} from '../actions/books';
import { setCurrentPage, setPerPage } from '../actions/pagination';
import Book from '../components/Book';
import FiltersView from '../components/FiltersView';
import Pagination from './Pagination';
import PaginationSelect from '../components/PaginationSelect';
import PagesView from '../components/PagesView';
import DatePickerView from '../components/DatePickerView';

class BooksWrap extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.books !== nextProps.books ||
      prevState.totalPages !== nextProps.totalPages ||
      prevState.currentPage !== nextProps.pagination.currentPage ||
      prevState.selectedPerPage !== nextProps.pagination.perPage
    ) {
      return {
        ...prevState,
        books: Object.values(nextProps.books),
        totalPages: nextProps.totalPages,
        selectedPerPage: nextProps.pagination.perPage,
        currentPage: nextProps.pagination.currentPage,
      };
    }

    return null;
  }

  state = {
    books: Object.values(this.props.books),
    filterGenres: '',
    selectedvalue: 'All',
    filterTitle: '',
    filterAuthor: '',
    currentBooks: this.props.books,
    currentPage: null,
    totalPages: this.props.totalPages,
    totalBooks: this.props.books.length,
    startDate: moment(),
    endDate: moment(),
    selectedPerPage: null,
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
    if (this.state.selectedvalue.toLowerCase() === 'all') {
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
    this.setState({
      startDate: moment(),
      endDate: moment(),
    });
    this.props.fetchBooksRequest();
  };

  onPageChanged = data => {
    const { currentPage, totalPages } = data;
    this.setState({ currentPage, totalPages });

    this.props.setCurrentPage(currentPage);

    this.props.fetchBooksRequest();
  };

  handlePerPage = e => {
    const { value } = e.target;
    const { selectedPerPage } = this.state;
    if (value !== selectedPerPage) {
      this.setState({
        ...this.state,
        selectedPerPage: value,
      });
      this.props.setPerPage(value);
      this.props.fetchBooksRequest();
    }
  };

  render() {
    const {
      selectedvalue,
      filterTitle,
      filterAuthor,
      books,
      totalPages,
      currentPage,
      startDate,
      endDate,
    } = this.state;

    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-sm-around">
          <FiltersView
            genres={this.props.genres}
            handleChangeSelect={this.handleChangeSelect}
            filterTitle={filterTitle}
            filterAuthor={filterAuthor}
            handleChangeFilter={this.handleChangeFilter}
            selectedvalue={selectedvalue}
          />
        </div>
        <div className=" justify-content-sm-around">
          <div className=" flex-column align-items-center datepicker-border">
            <DatePickerView
              startDate={startDate}
              endDate={endDate}
              handleChangeStartDate={this.handleChangeStartDate}
              handleChangeEndDate={this.handleChangeEndDate}
              handleDateSubmit={this.handleDateSubmit}
              handleDateDelete={this.handleDateDelete}
            />
          </div>
        </div>

        <div className="d-flex flex-wrap d-flex justify-content-between">
          <PaginationSelect handlePerPage={this.handlePerPage} />
          <PagesView currentPage={currentPage} totalPages={totalPages} />
        </div>
        <div className="d-flex flex-wrap">
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
        <div className="d-flex flex-wrap flex-row py-4  justify-content-center align-items-center">
          {totalPages && (
            <Pagination
              totalPages={totalPages}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          )}
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
    pagination: state.pagination,
  };
}
const mapDispatchToProps = {
  fetchBooksRequest,
  sagaBookDelete,
  fetchGenresRequest,
  setDateFilterSaga,
  setCurrentPage,
  setPerPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksWrap);
