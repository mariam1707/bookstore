import React, { Component } from 'react';
// import Input from '../Input';
import Modal from '../modal';
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
            <React.Fragment>
                {/* {console.log('ModalEdit', book)} */}
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.onHandleOpen}
                >
                    Редактировать
                </button>
                {console.log(this.state.isOpen)}
                {this.state.isOpen &&
                    <Modal book={book} />
                }
            </React.Fragment>
        )
    }
}

export default ModalEdit;