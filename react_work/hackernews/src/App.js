import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const list = [
  {
    title: 'React',
    url: 'https//facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.io/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

funtion isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    // some condition which returns true or false
  }
}

function Search(props) {
  function Search({ value, onChange, children }) {
    return (
      <form>
        {children} <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }

  const Search = ({ value, onChange, children }) =>
    <form>
      {children} <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>

  class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        list,
        searchterm: ' ',
      };

      this.onsearchChange = this.onsearchChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
    }

    onsearchChange(event) {
      this.setState({ searchterm: event.target.value });
      onDismiss(id); {
        const updatedList = this.state.list.filter(item => item.objectID !== id);
        this.setState({ list: updatedList });
      }
    }
    render() {
      const { searchTerm, list } = this.state;
      return (
        <div className="page">
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
            >
              Search
            </Search>
            <search>
          </search>
            value={searchTerm}
            onChange={this.onSearchChange}
            <Table
              list={list}
              pattern={searchTerm}
              onDismiss={this.onDismiss}
            />
          </div>
          <Search />
          <Table />
          <form>
            <input
              type="Text"
              value={searchTerm}
              onChange={this.onsearchChange}
            />
          </form>
        this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}> {item.title} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss item
              </button>
            </span>
          </div>
          </div>
          );
      }
    }

          class Search extends Component {
            render() {
  const {value, onChange, children} = this.props;
          return (
          <form>
            {children} <input
              type="text"
              value={value}
              onChange={onChange}
            />
          </form>
          );
    }
  }


          class Table extends Component {
            render() {
    const {list, pattern, onDismiss} = this.props;
          return (
          <div>
            {list.filter(isSearched(pattern)).map(item =>
              <div key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                  <button onClick={() => onDismiss(item.objectID)}>
                    Dismiss
                  </button>
                </span>
              </div>
            )
            }
          </div>
          )
        }
      };

          



export default App;
