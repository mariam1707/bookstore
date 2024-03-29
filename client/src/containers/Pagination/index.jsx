// @flow
import * as React from 'react';
import Pagination from 'components/Pagination';
import { equals } from 'ramda';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';
import type { PropsType, StateType } from './types';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default compose(setDisplayName('PaginationContainer'))(
  class extends React.PureComponent<PropsType, StateType> {
    static getDerivedStateFromProps(nextProps, prevState) {
      if (!equals(prevState.books, nextProps.books)) {
        const currentBooks = nextProps.books.slice(0, 0 + prevState.pageLimit);
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
      books: [],
      pageLimit: 6,
      options: [3, 6, 9, 12],
    };

    componentDidMount() {
      this.gotoPage(1);
    }

    onPageChanged = data => {
      const { books } = this.props;
      const { currentPage } = data;
      const { currentBooks, pageLimit } = this.state;
      const offset = (currentPage - 1) * +pageLimit;
      const currentBooksNew = books.slice(offset, offset + +pageLimit);
      if (!equals(currentBooks, currentBooksNew)) {
        this.setState({ currentBooks: currentBooksNew });
      }
    };

    gotoPage = page => {
      const totalRecords = this.props.books.length;
      const { pageLimit } = this.state;
      const totalPages = Math.ceil(totalRecords / +pageLimit);
      const currentPage = Math.max(0, Math.min(page, totalPages));
      const paginationData = {
        currentPage,
      };
      this.setState({ currentPage }, () => this.onPageChanged(paginationData));
    };

    handlePageLimit = e => {
      const { value } = e.target;
      const { pageLimit, currentPage } = this.state;
      if (value !== pageLimit) {
        this.setState({
          ...this.state,
          pageLimit: value,
        });
      }
      this.gotoPage(currentPage);
    };

    render() {
      const { currentPage, currentBooks, options, pageLimit } = this.state;
      const { userType, handleDelete } = this.props;
      const totalPages = Math.ceil(this.props.books.length / pageLimit);
      let pages = [];
      if (totalPages >= 2) {
        pages = range(1, totalPages);
      }
      const isPages = currentPage < totalPages;
      return (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          totalPages={totalPages}
          gotoPage={this.gotoPage}
          currentBooks={currentBooks}
          handlePageLimit={this.handlePageLimit}
          options={options}
          userType={userType}
          handleDelete={handleDelete}
          isPages={isPages}
        />
      );
    }
  }
);
