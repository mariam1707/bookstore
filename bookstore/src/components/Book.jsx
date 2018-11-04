import React, { Component } from 'react';
import ModalEdit from './ModalEdit';

class Book extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.book !== nextProps.book) {
      return {
        book: nextProps.book,
      };
    }

    return null;
  }

  state = {
    book: this.props.book,
    showModal: false,
  };

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  handleDelete = () => {
    const opt = {
      id_db: this.state.book.id,
      id_arr: this.props.arrId,
    };
    this.props.handleDelete(opt);
  };

  render() {
    const { book } = this.state;
    return (
      <div className="card-wrap col-md-4 ">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={book.image} alt="Card image cap" />
          <div className="card-body">
            <h4>{book.author}</h4>
            <p className="card-text">{book.title}</p>
            <p className="card-text">{book.genre}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  View
                </button>
                <button type="button" className="btn btn-primary" onClick={this.handleShow}>
                  Edit
                </button>
                {this.state.showModal ? (
                  <ModalEdit book={book} handleClose={this.handleClose} />
                ) : null}
              </div>
              <small className="text-muted">
                <button type="button" className="btn btn-primary" onClick={this.handleDelete}>
                  Delete
                </button>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
