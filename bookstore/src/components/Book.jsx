import React from 'react';

import ModalEdit from './ModalEdit'

const Book = ({ book }) => (
    <div className="card-wrap col-md-4 ">
        {/* {console.log(book)} */}
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={book.image} alt="Card image cap"></img>
            <div className="card-body">
                <h4>{book.author}</h4>
                <p className="card-text">{book.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <ModalEdit book={book} />
                    </div>
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
);

export default Book;
