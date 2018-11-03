import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { sagaBookAdd } from '../../actions/books';
import ModalCreate from '../../components/ModalCreate';

class CreateBook extends Component {
  state = {
    showModal: false,
  };

  handleShow = () =>
    this.setState({
      showModal: !this.state.showModal,
    });

  render() {
    const { showModal } = this.state;
    const { sagaBookAdd } = this.props;
    return (
      <Fragment>
        <button type="button" className="btn btn-light" onClick={this.handleShow}>
          CreateBook
        </button>
        {showModal && <ModalCreate handleShow={this.handleShow} handleSave={sagaBookAdd} />}
      </Fragment>
    );
  }
}

function mapStateToProps() {
  return {};
}
const mapDispatchToProps = {
  sagaBookAdd,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBook);
