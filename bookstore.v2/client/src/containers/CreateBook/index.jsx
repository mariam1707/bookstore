// @flow

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';

import { sagaBookAdd } from '../../actions/books';
import ModalCreate from '../../components/ModalCreate';
import type { PropsType, StateType } from './types';

function mapStateToProps(state) {
  return {
    genres: state.books.genres,
  };
}
const mapDispatchToProps = {
  sagaBookAdd,
};
export default
@compose(
  setDisplayName('CreateBook'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
class extends Component<PropsType, StateType> {
  state = {
    showModal: false,
  };

  handleShow = () =>
    this.setState({
      showModal: !this.state.showModal,
    });

  render() {
    const { showModal } = this.state;
    const { sagaBookAdd, genres } = this.props;
    return (
      <Fragment>
        <button type="button" className="btn btn-light" onClick={this.handleShow}>
          CreateBook
        </button>
        {showModal && (
          <ModalCreate handleShow={this.handleShow} handleSave={sagaBookAdd} genres={genres} />
        )}
      </Fragment>
    );
  }
}
