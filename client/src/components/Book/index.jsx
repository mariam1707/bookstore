// flow
import React from 'react';
import Moment from 'react-moment';

import ModalEdit from 'components/ModalEdit';
import isAdmin from 'utils/isAdmin';
import type { PropsType } from './types';

const Book = ({ book, handleClose, handleDelete, handleShow, userType, showModal }: PropsType) => (
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
          {isAdmin(userType) && (
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={handleShow}>
                Edit
              </button>
              {showModal ? <ModalEdit book={book} handleClose={handleClose} /> : null}
              <button type="button" className="btn btn-primary" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Book;
