import React, { Component } from 'react';
import Products from './Products';
import { button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const isValid = true;
    return (
      <div>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}

export default App;

  // <h1>
  //         <Products />
  //         <button variant="primary" disabled={!isValid}>default</button>
  //       </h1>