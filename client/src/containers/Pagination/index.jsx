import React, { Component } from 'react';
import Pagination from 'components/Pagination';
import { equals } from 'ramda';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class PaginationContainer extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!equals(prevState.books, nextProps.books) || prevState.pageLimit !== nextProps.pageLimit) {
      // console.log();
      const currentBooks = nextProps.books.slice(0, 0 + nextProps.pageLimit);
      console.log('GDSFP', currentBooks);
      return {
        ...prevState,
        books: nextProps.books,
        currentBooks,
      };
    }
    return null;
  }

  state = {
    currentPage: 1,
    currentBooks: [],
    books: this.props.books,
    pageLimit: this.props.pageLimit,
    // books: this.props.books,
    // totalPages: '',
  };

  componentDidMount() {
    this.gotoPage(1);
    // this.onPageChanged({ currentPage: 1 });
  }

  onPageChanged = data => {
    const { books } = this.props;
    // const { books } = this.state;
    const { currentPage } = data;
    const { pageLimit } = this.state;
    const offset = (currentPage - 1) * pageLimit;
    // console.log('onPageChanged', offset, currentPage, pageLimit);
    const currentBooks = books.slice(offset, offset + pageLimit);

    console.log('onPageChanged', currentBooks, books);
    this.setState({ currentPage, currentBooks });
  };

  gotoPage = page => {
    const totalRecords = this.props.books.length;
    const { pageLimit } = this.props;
    const totalPages = Math.ceil(totalRecords / pageLimit);
    const currentPage = Math.max(0, Math.min(page, totalPages));
    console.log('totalRecords', totalRecords, pageLimit);
    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    console.log('paginationData', paginationData);

    this.setState({ currentPage }, () => this.onPageChanged(paginationData));
  };

  render() {
    const { currentPage, currentBooks } = this.state;
    const totalPages = Math.ceil(this.props.books.length / this.props.pageLimit);
    let pages = [];
    if (totalPages >= 2) {
      pages = range(1, totalPages);
    }
    // const { books, handleDelete, userType } = this.props;
    // this.gotoPage(1);
    return (
      <Pagination
        pages={pages}
        currentPage={currentPage}
        gotoPage={this.gotoPage}
        currentBooks={currentBooks}
      />
    );
  }
}

export default PaginationContainer;
