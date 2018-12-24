// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import type { PropsType } from './types';

const FiltersView = ({
  genres,
  handleChangeSelect,
  filterTitle,
  filterAuthor,
  handleChangeFilter,
  selectedvalue,
}: PropsType) => (
  <React.Fragment>
    <div className="form-group col-md-4">
      <p>
        <FormattedMessage {...messages.genres} />
      </p>
      <select className="form-control" value={selectedvalue} onChange={handleChangeSelect}>
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
        name="filterTitle"
        value={filterTitle}
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
        name="filterAuthor"
        value={filterAuthor}
        onChange={handleChangeFilter}
      />
    </div>
  </React.Fragment>
);

export default FiltersView;
