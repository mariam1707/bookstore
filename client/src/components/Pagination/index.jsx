// flow
import React from 'react';
import Book from 'containers/Book';
import Pages from 'components/Pages';
import PaginationSelect from 'components/PaginationSelect';

const Pagination = ({
  pages,
  currentPage,
  totalPages,
  gotoPage,
  currentBooks,
  handlePageLimit,
  options,
}) => (
  <>
    <div className="d-flex flex-wrap d-flex justify-content-between">
      <PaginationSelect handlePerPage={handlePageLimit} options={options} />
      <Pages currentPage={currentPage} totalPages={totalPages} />
    </div>
    <div className="d-flex flex-wrap">
      {currentBooks && currentBooks.map(book => <Book key={book._id} book={book} />)}
    </div>
    <div className="d-flex flex-wrap flex-row py-4  justify-content-center align-items-center">
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
    </div>
  </>
);

export default Pagination;
