import React from 'react';
import Book from 'containers/Book';

const Pagination = ({ pages, currentPage, gotoPage, currentBooks }) => (
  <>
    {currentBooks && currentBooks.map(book => <Book key={book._id} book={book} />)}
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
  </>
);

export default Pagination;
