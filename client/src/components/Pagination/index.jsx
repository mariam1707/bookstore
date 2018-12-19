import React from 'react';

const Pagination = ({ pages, currentPage, gotoPage }) => (
  <nav>
    <ul className="pagination">
      {pages.map((page, index) => (
        <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
          <button type="button" className="page-link" onClick={() => gotoPage(page)}>
            {page}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Pagination;
