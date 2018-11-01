import React from 'react';

const FiltersView = (
    {
        genres,
        handleChangeSelect,
        filterTitle,
        filterAuthor,
        handleChangeFilter,
        selectedvalue
    }) => {
    return (
        <React.Fragment>
            <div className="form-group">
                <label>Genres</label>
                <select className="form-control" value={selectedvalue} onChange={handleChangeSelect}>
                    {genres && genres.map((genre, id) => (
                        <option key={id}> {genre} </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Фильтр по названию книги</label>
                <input type="text" className="form-control" name="filterTitle" value={filterTitle} onChange={handleChangeFilter} />
            </div>
            <div className="form-group">
                <label>Фильтр по названию автора</label>
                <input type="text" className="form-control" name="filterAuthor" value={filterAuthor} onChange={handleChangeFilter} />
            </div>
        </React.Fragment>
    )
}

export default FiltersView;