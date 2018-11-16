import React from 'react';

const CreateBookView = ({ handleChange, book, handleChangeSelect, handleSaveClose, genres }) => (
  <div className="container">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Название книги</h5>
        <input type="text" className="form-control" name="title" onChange={handleChange} />
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <div className="form-group">
            <p>Имя автора</p>
            <input type="text" className="form-control" name="author" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Цена</p>
            <input type="text" className="form-control" name="price" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p>Картинка</p>
            <input
              type="text"
              className="form-control"
              name="image"
              onChange={handleChange}
              value={book.image}
              placeholder="Can be empty"
            />
          </div>
          <div className="form-group">
            <p>Жанры</p>
            <select className="form-control" value={book.genre} onChange={handleChangeSelect}>
              {genres && genres.map(genre => <option key={genre._id}> {genre.genre} </option>)}
            </select>
          </div>
        </ul>
        <button type="button" className="btn btn-primary" onClick={handleSaveClose}>
          Save
        </button>
      </div>
    </div>
  </div>
);

export default CreateBookView;
