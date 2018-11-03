import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { sagaBookSave } from '../../actions/books';

const modalRoot = document.getElementById('modal-root');

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

  handleSubmit = () => {
    this.props.handleClose();
    this.props.sagaBookSave(this.state.book);
  };

  render() {
    const { book } = this.state;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <input
              type="text"
              className="form-control"
              name="title"
              value={book.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
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
                <p>{book.genre}</p>
                <input
                  type="text"
                  className="form-control"
                  name="genre"
                  value={book.genre}
                  onChange={this.handleChange}
                />
              </div>
            </ul>
            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
              Save
            </button>
            <button type="button" className="btn btn-primary" onClick={this.props.handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>,
      this.el
    );
  }
}
function mapStateToProps() {
  return {};
}
const mapDispatchToProps = {
  sagaBookSave,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEdit);
