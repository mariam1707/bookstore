import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { equals } from 'ramda';

// import { FormattedMessage } from 'react-intl';
import BooksWrap from 'components/BooksWrap';
import {
  fetchBooksRequest,
  bookDeleteWatcher,
  fetchGenresRequest,
  setDateFilterWatcher,
} from '../../actions/books';
// import { setCurrentPage, setPerPage } from '../../actions/pagination';

// import messages from './messages';

function mapStateToProps(state) {
  return {
    books: state.books.books,
    totalPages: state.books.totalPages,
    genres: state.books.genres,
    userType: state.auth.user.user_type,
    pagination: state.pagination,
  };
}
const mapDispatchToProps = {
  fetchBooksRequest,
  bookDeleteWatcher,
  fetchGenresRequest,
  setDateFilterWatcher,
  // setCurrentPage,
  // setPerPage,
};

class BooksWrapContainer extends Component {
  static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
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
    selectedValue: 'All',
    filterTitle: '',
    filterAuthor: '',
    currentBooks: [],
    currentPage: null,
    totalPages: null,
    totalBooks: this.props.books.length,
    startDate: moment('2018-09-04'),
    endDate: moment(),
    perPage: 6,
  };

  componentDidMount(): void {
    this.props.fetchBooksRequest();
    this.props.fetchGenresRequest();
  }

  handleChangeSelect = e => {
    this.setState({
      ...this.state,
      selectedValue: e.target.value,
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

  handleChangeFilter = (e: SyntheticInputEvent) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  filterGenres = book => {
    if (this.state.selectedValue.toLowerCase() === 'all') {
      return book.genre.toLowerCase();
    }
    return book.genre.toLowerCase().includes(this.state.selectedValue.toLowerCase());
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
    this.props.setDateFilterWatcher(filterDate);
  };

  handleDateDelete = () => {
    this.setState({
      startDate: moment('2018-09-04'),
      endDate: moment(),
    });
    this.props.fetchBooksRequest();
  };

  onPageChanged = data => {
    const { books } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentBooks = books.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentBooks, totalPages });
  };
  // onPageChanged = () => {
  //   // const { currentPage, totalPages } = data;
  //   // this.setState({ currentPage, totalPages });

  //   // this.props.setCurrentPage(currentPage);

  //   this.props.fetchBooksRequest();
  // };

  render() {
    const {
      selectedValue,
      filterTitle,
      filterAuthor,
      books,
      // totalPages,
      // currentPage,
      startDate,
      endDate,
      currentBooks,
      // totalBooks,
      perPage,
    } = this.state;

    const { bookDeleteWatcher, userType, genres } = this.props;
    if (books.length === 0) return null;
    return (
      <BooksWrap
        selectedValue={selectedValue}
        filterTitle={filterTitle}
        filterAuthor={filterAuthor}
        books={books}
        startDate={startDate}
        endDate={endDate}
        handleChangeSelect={this.handleChangeSelect}
        handleChangeStartDate={this.handleChangeStartDate}
        handleChangeEndDate={this.handleChangeEndDate}
        handleChangeFilter={this.handleChangeFilter}
        handlefilterGenres={this.filterGenres}
        handlefilterTitle={this.filterTitle}
        handlefilterAuthor={this.filterAuthor}
        handleDateSubmit={this.handleDateSubmit}
        handleDateDelete={this.handleDateDelete}
        onPageChanged={this.onPageChanged}
        bookDeleteWatcher={bookDeleteWatcher}
        userType={userType}
        genres={genres}
        currentBooks={currentBooks}
        totalBooks={books.length}
        perPage={perPage}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksWrapContainer);
