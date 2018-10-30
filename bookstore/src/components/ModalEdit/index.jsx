import React, { Component } from 'react';
// import Input from '../Input';

class ModalEdit extends Component {
    state = {
        book: this.props.book,
        isOpen: false,

    }
    onHandleChange = (e) => {
        this.setState({
            book: {
                [e.target.name]: e.target.value
            }
        })
    }
    onHandleOpen = () => {

        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        const { book } = this.state;
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.onHandleOpen}>
                    Редактировать

                </button>
                <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalEdit;