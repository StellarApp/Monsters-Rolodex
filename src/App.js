import {Component} from 'react'

import logo from './logo.svg';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => 
      this.setState(
        () => {
          return ({monsters: users});
        }
        ,
        () => {
          console.log(this.state)
        }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField}
    })
  }

  render(){
    // console.log('render from AppJS');

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return(
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className='app-title'>Cute kittens</h1>
          <SearchBox 
            className = 'monsters-search-box'
            onChangeHandler = { onSearchChange }
            placeholder = 'Search monsters'
            />
          <CardList monsters = {filteredMonsters}/>
        </header>
      </div>
    )
  }
} 

export default App;
