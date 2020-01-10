import React from 'react';
import Nav from './Nav';
import CardContainer from '../src/containers/CardContainer';
import './App.css';

class App extends React.Component{
constructor(){
  super()

  this.state = {
    games: []
  }
}

fetch = () =>{
  
    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
      }
    })
.then(response => response.json())
.then(newgames => this.setState({games: newgames.results}))

}
  
render() {
  // debugger
  return (
    <div className="App" >
      <header className="App-header">
        <button onClick={this.fetch}>random game</button>
        <Nav />
        <CardContainer games={this.state.games}/>
      
      </header>
    </div>
  )
}}


export default App;
