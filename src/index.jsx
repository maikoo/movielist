import React from "react";
import ReactDOM from "react-dom";
// import 'bootstrap';
import Movies from "./components/Movies.jsx";
import Search from "./components/Search.jsx";
import movies from "./data/movieData.js";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  keyUp(e) {
    console.log(e.target.value)
    // console.log('clicked')
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
          <Movies movies={movies}/>
          </div>

        </div>

      </div>
    );
  }
}

ReactDOM.render(<MovieList />, document.getElementById("index"));

// const Index = () => {
//   return (
//     <div>
//       <div>Index renders!</div>
//       <MovieList />

//     </div>
//   );
  
// };