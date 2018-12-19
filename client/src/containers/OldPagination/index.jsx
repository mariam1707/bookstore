import React, { Component, Fragment } from 'react';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.totalPages !== nextProps.totalPages) {
      return {
        ...prevState,
        totalPages: nextProps.totalPages,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    const { totalRecords = null, pageNeighbours = 0 } = props;

    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    this.pageNeighbours =
      typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;
    this.state = {
      currentPage: 1,
      totalPages: '',
    };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.state.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.state.totalPages,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = page => evt => {
    evt.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = evt => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  render() {
    if (this.state.totalPages === 1) return null;

    const { currentPage, totalPages } = this.state;
    let i = 1;
    const pages = [];
    while (i <= totalPages) {
      pages.push(i);
      i += 1;
    }
    return (
      <Fragment>
        <nav aria-label="Countries Pagination">
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      type="button"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </button>
                  </li>
                );

              if (page === RIGHT_PAGE)
                return (
                  <li key={index} className="page-item">
                    <button
                      className="page-link"
                      type="button"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </button>
                  </li>
                );

              return (
                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                  <button className="page-link" type="button" onClick={this.handleClick(page)}>
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Pagination;
