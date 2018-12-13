// flow
import React from 'react';
import { connect } from 'react-redux';

export default connect(
  state => ({
    totalPages: state.books.totalPages,
    currentPage: state.pagination.currentPage,
  }),
  null
)(
  ({ totalPages, currentPage }): React.Node => (
    <div>
      {currentPage && (
        <span className="current-page d-inline-block h-100 text-secondary">
          Page <span className="font-weight-bold">{currentPage}</span> /{' '}
          <span className="font-weight-bold">{totalPages}</span>
        </span>
      )}
    </div>
  )
);

// const Pages = ({ currentPage, totalPages }) => (

// );
// export default Pages;
