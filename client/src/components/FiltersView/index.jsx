// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import type { PropsType } from './types';

const FiltersView = ({
  genres,
  handleChangeSelect,
  filterTitleValue,
  filterAuthorValue,
  handleChangeFilter,
  selectedValue,
}: PropsType) => (
  <React.Fragment>
    <div className="form-group col-md-4">
      <p>
        <FormattedMessage {...messages.genres} />
      </p>
      <select className="form-control" value={selectedValue} onChange={handleChangeSelect}>
        <option>All</option>
        {genres && genres.map(genre => <option key={genre._id}> {genre.genre} </option>)}
      </select>
    </div>
    <div className="form-group col-md-4">
      <p>
        <FormattedMessage {...messages.bookTitle} />
      </p>
      <input
        type="text"
        className="form-control"
        name="filterTitleValue"
        value={filterTitleValue}
        onChange={handleChangeFilter}
      />
    </div>
    <div className="form-group col-md-4">
      <p>
        <FormattedMessage {...messages.authorName} />
      </p>
      <input
        type="text"
        className="form-control"
        name="filterAuthorValue"
        value={filterAuthorValue}
        onChange={handleChangeFilter}
      />
    </div>
  </React.Fragment>
);

export default FiltersView;
