import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class G_class extends Component {


  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    }
    return (
      <div ClassName="MyComponent">
        <h1>
          Hello, {formatName(user)}!
        </h1>
      </div>
    )
  }
}

export default G_class; 