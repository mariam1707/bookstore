import React, { Component } from 'react';
import Modal from './Modal';


class Book extends Component {
    state = {
        book: this.props.book,
        showModal: false,
    }
    handleShow = () => {
        this.setState({
            showModal: true,
        })
    }
    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }
    render() {
        const { book } = this.state;
        return (
            <div className="card-wrap col-md-4 ">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" src={book.image} alt="Card image cap"></img>
                    <div className="card-body">
                        <h4>{book.author}</h4>
                        <p className="card-text">{book.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleShow}>
                                    Edit
                                </button>
                                {this.state.showModal ? (
                                    <Modal book={book} handleClose={this.handleClose} />
                                ) : null}
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Book;
