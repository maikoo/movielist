import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap';
import Movies from "./components/Movies.jsx";
import Search from "./components/Search.jsx";
import movies from "./data/movieData.js";
import AddMovie from "./components/AddMovie.jsx";

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      searchterm: '',
      movies: movies
    }
  }

  onChange (e) {
    this.setState({
      newItem : e.target.value
    })
  }
  keyUp (e) {
    this.setState({
      searchterm : e.target.value
    })
    console.log(e.target.value)

  }
  addItem (e) {
    let movie = {title: e.target.value};
    this.setState({
      movies: [...movies, movie]
    })
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
      <nav>
        <div>
          <AddMovie onChange={this.onChange.bind(this)} onClick={this.addItem.bind(this)}/>
        </div>
        <div>
          <Search onChange={this.keyUp.bind(this)}/>
        </div>

      </nav>
        
        <br/>
        <br/>
        <br/>
        <div>
          <div>
          <Movies 
            searchterm={this.state.searchterm}
            movies={this.state.movies}
          />
          </div>

        </div>

      </div>
    );
  }
}

ReactDOM.render(<MovieList />, document.getElementById("index"));
