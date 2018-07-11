import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap';
import Movies from "./components/Movies.jsx";
import Search from "./components/Search.jsx";
import movies from "./data/movieData.js";

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchterm: '',
      movies: movies
    }
  }

  // matchup (search) {
  //   for (let key in this.state.movies) {
  //     if(this.state.movies[key].title === this.state.searchterm) {
  //       this.setState({
  //         movies : this.state.movies[key]
  //       })
  //     }
  //   }
  // }

  keyUp (e) {
    this.setState({
      searchterm : e.target.value
    })
    console.log(e.target.value)
    // console.log('state', this.state);

  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
      <nav>
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
