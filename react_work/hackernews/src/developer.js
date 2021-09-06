import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class developer extends Component{

    constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
    }
  
    getName(){
      return this.first_name + ' ' + this.last_name;
    }
}
