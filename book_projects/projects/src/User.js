import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class User extends Component {
 
  constructor(props){ 
      super(props);    
      this.handleClick = this.handleClick.bind(this);                                     
  }

  handleClick(e) {
    this.props.history.push("/Github");  
  }


  render() { 
    return (
      <div>                
        <h1>User Login: { this.props.match.params.login }</h1>
        <h2>User Id: { this.props.match.params.id }</h2>`                                                                                                                                        
        <Button variant="primary" onClick={this.handleClick}>
            Go to GitHub Users
 	    </Button>      

      </div>
    );
  }
}

export default User;