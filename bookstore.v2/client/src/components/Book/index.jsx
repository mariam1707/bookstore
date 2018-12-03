// @flow
import * as React from 'react';
import Moment from 'react-moment';

import ModalEdit from '../ModalEdit';
import isAdmin from '../../utils/isAdmin';
import type { PropsType, StateType } from './types';

class Book extends React.Component<PropsType, StateType> {
  static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
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
    const { book } = this.state;
    this.props.handleDelete(book._id);
  };

  render() {
    const { book } = this.state;
    return (
      <div className="card-wrap col-md-4 ">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={book.image} alt="Card" />
          <div className="card-body">
            <h4>{book.author}</h4>
            <p className="card-text">{book.title}</p>
            <p className="card-text">{book.genre}</p>
            <p>
              Дата добавления: <Moment format="DD/MM/YYYY">{book.date}</Moment>
            </p>
            <div className="d-flex justify-content-between align-items-center">
              {isAdmin(this.props.user_type) && (
                <div className="btn-group">
                  <button type="button" className="btn btn-primary" onClick={this.handleShow}>
                    Edit
                  </button>
                  {this.state.showModal ? (
                    <ModalEdit book={book} handleClose={this.handleClose} />
                  ) : null}
                  <button type="button" className="btn btn-primary" onClick={this.handleDelete}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
