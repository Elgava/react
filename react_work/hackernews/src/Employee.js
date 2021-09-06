import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list_employees = [
    {
        Name : 'john',
        surname : 'dory',
        id_num : '98462536193',
        cel_num : '07445697452',
    },
    {
        Name : 'carona',
        surname : 'virus',
        id_num : '93468149832',
        cel_num : '1827364528', 
    },
    {
        Name : 'yuuji',
        surname : 'kazami',
        id_num : '011227561082',
        cel_num : '08260832840',
    },
    {
        Name : 'itadori',
        surname : 'yuuji',
        id_num : '002807671856',
        cel_num : '89123747861',
    },
    {
        Name : 'jeff',
        surname : 'atkinson',
        id_num : '8412209853',
        cel_num : '0732516251',
    },

];

class Employees extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            list_employees: list_employees,
        };

        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss(id) {
        const updatedList = this.state.list_employees.filter(item => item.id_num !== id);
        this.setState({list_employees: updatedList});
      }

      render() {
        return (
          <div className="employees">
            {this.state.list_employees.map(item =>
              <div key={item.id_num}>
                <span>
                {item.Name}
                </span>
                <span>{item.surname} </span>
                <span>{item.id_num} </span>
                <span>{item.cel_num} </span>
                <span>
                  <button
                    onClick={() => this.onDismiss(item.id_num)}
                    type="button"
                  >
                    Dismiss employee
                  </button>
                </span>
              </div>
            )}
          </div>
        );
      }
    //   <employees />
    }
    
    export default Employees;