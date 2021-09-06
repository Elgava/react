import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';

const default_query = 'REDUX'

const path_base = 'https//:hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };


    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  setSearchTopStories(results) {
    this.setstate({ results });
  }

  onDismiss(id){
    const isnotId = item.objecctID !== id;
    const updateHits = this.state.result.hits.filter(isnotId);
    this.setstate({ results 
    
    });
  }

  componentdidMount() {
    const { searchTopStories } = this.state;

    fetch('${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}')
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }
  render() {
    const { searchTerm, result } = this.state;
    if (!result) { return null; }

    return (
      <div className="page">
        <header className="interactions">
          <search
            value={searchTerm}
            onchange={this.onSearchchange}
          >
            Search
          </search>
          <div>
            {<table
              list={result.hits}
              pattern={searchTerm}
              ondismiss={this.ondismiss}
            />
              : null
              searchTerm=


          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          Learn React

        </header>
      </div>
    );
  }
}
export default App;

const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>
          {item.author}
        </span>
        <span style={{ width: '10%' }}>
          {item.num_comments}
        </span>
        <span style={{ width: '10%' }}> 
          {item.points}
        </span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          />
         </span>
        Dismiss
        <span>

          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>

