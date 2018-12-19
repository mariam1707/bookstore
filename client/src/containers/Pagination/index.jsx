import React, { Component } from 'react';
import Pagination from 'components/Pagination';

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
  pageLimit = this.props.pageLimit;

  totalRecords = this.props.totalRecords;

  totalPages = Math.ceil(this.totalRecords / this.pageLimit);

  state = { currentPage: 1 };

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    const { onPageChanged } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = range(1, this.totalPages);

    return <Pagination pages={pages} currentPage={currentPage} gotoPage={this.gotoPage} />;
  }
}

export default PaginationContainer;
