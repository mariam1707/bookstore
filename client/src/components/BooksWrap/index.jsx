// @flow
import React from 'react';

import FiltersView from 'components/FiltersView';
import Pagination from 'containers/Pagination';
import type { PropsType } from './types';

const BooksWrap = ({
  selectedValue,
  filterTitleValue,
  filterAuthorValue,
  books,
  handleChangeSelect,
  handleChangeFilter,
  handlefilterGenres,
  handlefilterTitle,
  handlefilterAuthor,
  bookDeleteWatcher,
  userType,
  genres,
}: PropsType) => (
  <>
    <div className="container">
      <div className="d-flex flex-wrap justify-content-sm-around">
        <FiltersView
          genres={genres}
          handleChangeSelect={handleChangeSelect}
          filterTitleValue={filterTitleValue}
          filterAuthorValue={filterAuthorValue}
          handleChangeFilter={handleChangeFilter}
          selectedValue={selectedValue}
        />
      </div>

      <>
        <Pagination
          books={books
            .filter(handlefilterGenres)
            .filter(handlefilterTitle)
            .filter(handlefilterAuthor)}
          handleDelete={bookDeleteWatcher}
          userType={userType}
        />
      </>
    </div>
  </>
);

export default BooksWrap;
