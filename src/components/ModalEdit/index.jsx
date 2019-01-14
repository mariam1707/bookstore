import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';

import { bookUpdateWatcher } from 'actions/books';
import './style.scss';

const modalRoot = document.getElementById('modal-root');

export default compose(
  setDisplayName('ModalEdit'),
  connect(
    state => ({
      genres: state.books.genres,
    }),
    {
      bookUpdateWatcher,
    }
  )
)(
  class ModalEdit extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book: this.props.book,
      };
      this.el = document.createElement('div');
    }

    componentDidMount() {
      modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }

    handleChange = e => {
      this.setState({
        ...this.state,
        book: {
          ...this.state.book,
          [e.target.name]: e.target.value,
        },
      });
    };

    handleChangeSelect = e =>
      this.setState({
        ...this.state,
        book: {
          ...this.state.book,
          genre: e.target.value,
        },
      });

    handleSubmit = () => {
      this.props.handleClose();
      this.props.bookUpdateWatcher(this.state.book);
    };

    render() {
      const { book } = this.state;
      const { genres } = this.props;

      return ReactDOM.createPortal(
        <div className="modal">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <p className="card-title">{book.title}</p>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={book.title}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>{book.author}</p>
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  value={book.author}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>{book.price}</p>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={book.price}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <p>Картинка</p>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.book.image}
                  placeholder="Can be empty"
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
              <div className="box-footer">
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
                  Save
                </button>
                <button type="button" className="btn btn-primary" onClick={this.props.handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>,
        this.el
      );
    }
  }
);
