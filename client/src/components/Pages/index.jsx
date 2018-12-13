import React from 'react';

const Pages = ({ currentPage, totalPages }) => (
  <div>
    {currentPage && (
      <span className="current-page d-inline-block h-100 text-secondary">
        Page <span className="font-weight-bold">{currentPage}</span> /{' '}
        <span className="font-weight-bold">{totalPages}</span>
      </span>
    )}
  </div>
);
export default Pages;
