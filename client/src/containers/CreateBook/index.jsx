// @flow

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import setDisplayName from 'recompose/setDisplayName';
import compose from 'recompose/compose';

import { bookAddWatcher } from 'actions/books';
import ModalCreate from 'components/ModalCreate';
import type { PropsType, StateType } from './types';

export default compose(
  setDisplayName('CreateBookContainer'),
  connect(
    state => ({
      genres: state.books.genres,
    }),
    {
      bookAddWatcher,
    }
  )
)(
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
      const { bookAddWatcher, genres } = this.props;
      return (
        <Fragment>
          <button type="button" className="btn btn-light" onClick={this.handleShow}>
            CreateBook
          </button>
          {showModal && (
            <ModalCreate handleShow={this.handleShow} handleSave={bookAddWatcher} genres={genres} />
          )}
        </Fragment>
      );
    }
  }
);
