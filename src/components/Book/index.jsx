// @flow
import React from 'react';
import Moment from 'react-moment';
import { setDisplayName, compose, lifecycle } from 'recompose';
import { equals } from 'ramda';
import { FormattedMessage } from 'react-intl';
import ModalEdit from 'components/ModalEdit';
import isAdmin from 'utils/isAdmin';
import withShowModal from 'hocs/withShowModal';
import type { PropsType } from './types';
import messages from './messages';
import './book.scss';

export default compose(
  setDisplayName('Book'),
  lifecycle({
    shouldComponentUpdate(nextProps) {
      if (equals(nextProps.book, this.props.book)) {
        return false;
      }
      return true;
    },
  }),
  withShowModal
)(({ book, hide, handleDelete, show, userType, isModal }: PropsType) => (
  <div className="card-wrap col-md-4 ">
    <div className="card h-100 box-shadow">
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
            <>
              <button type="button" className="btn btn-primary" onClick={show}>
                <FormattedMessage {...messages.edit} />
              </button>
              {isModal ? <ModalEdit book={book} handleClose={hide} /> : null}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(book._id)}
              >
                <FormattedMessage {...messages.delete} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
));
