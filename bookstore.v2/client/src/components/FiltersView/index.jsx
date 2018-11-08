import React from 'react';

const FiltersView = ({
  genres,
  handleChangeSelect,
  filterTitle,
  filterAuthor,
  handleChangeFilter,
  selectedvalue,
}) => (
  <React.Fragment>
    <div className="form-group col-md-4">
      <p>Жанры</p>
      <select className="form-control" value={selectedvalue} onChange={handleChangeSelect}>
        {genres && genres.map(genre => <option key={genre._id}> {genre.genre} </option>)}
      </select>
    </div>
    <div className="form-group col-md-4">
      <p>Фильтр по названию книги</p>
      <input
        type="text"
        className="form-control"
        name="filterTitle"
        value={filterTitle}
        onChange={handleChangeFilter}
      />
    </div>
    <div className="form-group col-md-4">
      <p>Фильтр по названию автора</p>
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
