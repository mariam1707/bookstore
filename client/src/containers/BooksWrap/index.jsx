// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { equals } from 'ramda';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';

import BooksWrap from 'components/BooksWrap';

import {
  fetchBooksRequest,
  bookDeleteWatcher,
  fetchGenresRequest,
  setDateFilterWatcher,
} from 'actions/books';

import type { PropsType, StateType } from './types';

export default compose(
  setDisplayName('BooksWrapContainer'),
  connect(
    state => ({
      books: state.books.books,
      genres: state.books.genres,
      userType: state.auth.user.user_type,
    }),
    {
      fetchBooksRequest,
      bookDeleteWatcher,
      fetchGenresRequest,
      setDateFilterWatcher,
    }
  )
)(
  class extends React.Component<PropsType, StateType> {
    static getDerivedStateFromProps(nextProps: Object, prevState: Object) {
      if (!equals(prevState.books, nextProps.books)) {
        return {
          ...prevState,
          books: Object.values(nextProps.books),
        };
      }
      return null;
    }

    state = {
      books: Object.values(this.props.books),
      selectedValue: 'All',
      filterTitleValue: '',
      filterAuthorValue: '',
    };

    componentDidMount(): void {
      this.props.fetchBooksRequest();
      this.props.fetchGenresRequest();
    }

    handleChangeSelect = e => {
      this.setState({
        ...this.state,
        selectedValue: e.target.value,
      });
    };

    handleChangeFilter = (e: SyntheticInputEvent) => {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value.toLowerCase(),
      });
    };

    filterGenres = book => {
      if (this.state.selectedValue.toLowerCase() === 'all') {
        return book.genre.toLowerCase();
      }
      return book.genre.toLowerCase().includes(this.state.selectedValue.toLowerCase());
    };

    filterTitle = book =>
      book.title
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(this.state.filterTitleValue.replace(/\s+/g, ''));

    filterAuthor = book =>
      book.author
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(this.state.filterAuthorValue.replace(/\s+/g, ''));

    render() {
      const { selectedValue, filterTitleValue, filterAuthorValue, books } = this.state;

      const { bookDeleteWatcher, userType, genres } = this.props;
      if (books.length === 0) return null;
      return (
        <BooksWrap
          selectedValue={selectedValue}
          filterTitleValue={filterTitleValue}
          filterAuthorValue={filterAuthorValue}
          books={books}
          handleChangeSelect={this.handleChangeSelect}
          handleChangeFilter={this.handleChangeFilter}
          handlefilterGenres={this.filterGenres}
          handlefilterTitle={this.filterTitle}
          handlefilterAuthor={this.filterAuthor}
          bookDeleteWatcher={bookDeleteWatcher}
          userType={userType}
          genres={genres}
        />
      );
    }
  }
);
