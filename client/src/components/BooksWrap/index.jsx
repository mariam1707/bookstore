import React from 'react';

import DatePickerView from 'components/DatePickerView';
import Book from 'containers/Book';
import FiltersView from 'components/FiltersView';
import PaginationSelect from 'components/PaginationSelect';
// import Pages from 'components/Pages';
// import Pagination from 'containers/Pagination';

const BooksWrap = ({
  selectedValue,
  filterTitle,
  filterAuthor,
  books,
  // totalPages,
  startDate,
  endDate,
  options,
  handleChangeSelect,
  handleChangeStartDate,
  handleChangeEndDate,
  handleChangeFilter,
  handlefilterGenres,
  handlefilterTitle,
  handlefilterAuthor,
  handleDateSubmit,
  handleDateDelete,
  // onPageChanged,
  handlePerPage,
  bookDeleteWatcher,
  userType,
  genres,
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
      <div className=" justify-content-sm-around">
        <div className=" flex-column align-items-center datepicker-border">
          <DatePickerView
            startDate={startDate}
            endDate={endDate}
            handleChangeStartDate={handleChangeStartDate}
            handleChangeEndDate={handleChangeEndDate}
            handleDateSubmit={handleDateSubmit}
            handleDateDelete={handleDateDelete}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap d-flex justify-content-between">
        <PaginationSelect handlePerPage={handlePerPage} options={options} />
        {/* <Pages /> */}
      </div>
      <div className="d-flex flex-wrap">
        {books &&
          books
            .filter(handlefilterGenres)
            .filter(handlefilterTitle)
            .filter(handlefilterAuthor)
            .map(book => (
              <Book
                key={book._id}
                book={book}
                handleDelete={bookDeleteWatcher}
                userType={userType}
              />
            ))}
      </div>
      <div className="d-flex flex-wrap flex-row py-4  justify-content-center align-items-center">
        {/* {totalPages && (
           <Pagination totalPages={totalPages} pageNeighbours={1} onPageChanged={onPageChanged} />
        )} */}
      </div>
    </div>
  </>
);

export default BooksWrap;
