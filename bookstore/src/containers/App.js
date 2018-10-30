import React, { Component } from 'react';



import Menu from '../components/Menu'
import BooksWrap from './BooksWrap'



class App extends Component {

  render() {
    return (
      <div>
        <Menu />
        <BooksWrap />
      </div>
    );
  }
}




export default App;
