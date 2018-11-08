import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class ModalEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        image:
          'http://t1.gstatic.com/images?q=tbn:ANd9GcT--GCKQVgeygN8gZsi7JJALb0KtZxGZDDyMYdw481-OKYPthtg',
      },
    };
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleChange = e =>
    this.setState({
      ...this.state,
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value,
      },
    });

  handleChangeSelect = e =>
    this.setState({
      ...this.state,
      book: {
        ...this.state.book,
        genre: e.target.value,
      },
    });

  handleSaveClose = () => {
    const { handleShow, handleSave } = this.props;
    const { book } = this.state;
    handleSave(book);
    handleShow();
  };

  render() {
    const { handleShow, genres } = this.props;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Название книги</h5>
            <input type="text" className="form-control" name="title" onChange={this.handleChange} />
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <div className="form-group">
                <p>Имя автора</p>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Цена</p>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Жанры</p>
                <select
                  className="form-control"
                  value={this.state.book.genre}
                  onChange={this.handleChangeSelect}
                >
                  {genres && genres.map(genre => <option key={genre._id}> {genre.genre} </option>)}
                </select>
              </div>
            </ul>
            <button type="button" className="btn btn-primary" onClick={this.handleSaveClose}>
              Save
            </button>
            <button type="button" className="btn btn-primary" onClick={handleShow}>
              Close
            </button>
          </div>
        </div>
      </div>,
      this.el
    );
  }
}

export default ModalEdit;
