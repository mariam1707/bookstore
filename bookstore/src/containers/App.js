import React, { Component } from 'react';
import { connect } from 'react-redux';


import {
  fetchBooksRequest,
} from '../actions/books';
import Menu from '../components/Menu'
import BooksWrap from './BooksWrap'

class App extends Component {
  componentDidMount() {
    this.props.fetchBooksRequest();
  }
  render() {
    return (
      <div>
        <Menu />
        <BooksWrap />
        {console.log(this.props.books)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    books: state.books.books
  });
}
const mapDispatchToProps = {
  fetchBooksRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
