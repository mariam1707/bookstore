import React from 'react';

import FiltersView from 'components/FiltersView';

import Pagination from 'containers/Pagination';

const BooksWrap = ({
  selectedValue,
  filterTitle,
  filterAuthor,
  books,
  handleChangeSelect,
  handleChangeFilter,
  handlefilterGenres,
  handlefilterTitle,
  handlefilterAuthor,
  bookDeleteWatcher,
  userType,
  genres,
  perPage,
}) => (
  <>
    <div className="container">
      <div className="d-flex flex-wrap justify-content-sm-around">
        <FiltersView
          genres={genres}
          handleChangeSelect={handleChangeSelect}
          filterTitle={filterTitle}
          filterAuthor={filterAuthor}
          handleChangeFilter={handleChangeFilter}
          selectedValue={selectedValue}
        />
      </div>

      <div>
        <Pagination
          pageLimit={perPage}
          books={books
            .filter(handlefilterGenres)
            .filter(handlefilterTitle)
            .filter(handlefilterAuthor)}
          handleDelete={bookDeleteWatcher}
          userType={userType}
        />
      </div>
    </div>
  </>
);

export default BooksWrap;
