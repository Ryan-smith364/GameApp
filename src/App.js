import React from 'react';
import SearchBar from '../src/display/SearchBar';
import CardContainer from '../src/containers/CardContainer';
import './App.css';

class App extends React.Component{
constructor(){
  super()

  this.state = {
    games: []
  }
}

removeGame = (oldGame) => {
  this.setState({
    games: this.state.games.filter(game => game !== oldGame)
  })
}

onSearch = (e) =>{
    e.preventDefault()
    let game = e.currentTarget.firstElementChild.value
    // debugger

    if(game === ""){
        alert('Search For Game')
    }
    else{
      e.currentTarget.firstElementChild.value = ''

      let officialTitle = game.split(" ").join("-")

    this.readyGame(officialTitle)
    }
}

fetchPublishers = (publisher) => {
  fetch(`https://rawg-video-games-database.p.rapidapi.com/publishers/${publisher}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		"x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
  }
  })
  .then(response => response.json())
  .then(pub => console.log(pub))
  .catch(err => console.log(err))
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
.then(gameSearch => gameSearch.results.forEach(game => this.readyGame(game.slug)))
.catch(err => {
  console.log(err);
});

}

  readyGame = (game) => {
    console.log(game)
        fetch(`https://rawg-video-games-database.p.rapidapi.com/games/${game}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": "1e6e6d3cf5msh05b9ecae27dcaa2p1041d7jsn3cfa58828426"
        }
      })
  .then(response => response.json())
  .then(newgame => newgame.detail === "Not found." ? alert('Game Not Found') : this.setState({games: [...this.state.games, newgame]}))
  .catch(err => {
    console.log(err);
  });
}


render() {
  // debugger
  return (
    <div className="App" >
      <header className="App-header">
        <button onClick={this.fetch}>random games</button>
        <SearchBar onSearch={this.onSearch}/>
        <CardContainer games={this.state.games} getProducer={this.fetchPublishers} removeGame={this.removeGame}/>
      
      </header>
    </div>
  )
}}


export default App;
