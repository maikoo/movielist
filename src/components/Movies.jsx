import React from "react";
import MovieListEntry from "./movielistentry.jsx";
import movies from "../data/movieData.js";

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      watched: ''
    })
    this.toggleUnwatch = this.toggleUnwatch.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
  }

  toggleWatch() {
    this.setState({
      watched: 'watched'
    })
  }
  toggleUnwatch() {
    this.setState({
      watched: 'unwatched'
    })
  }

  render() {
    let ele;
    if(this.state.watched === 'watched') {
      ele = ( 
        this.props.movies.map((movie, ind) => {
        if (movie.title.toLowerCase().includes(this.props.searchterm.toLowerCase()) && movie.watched === true) {
          return (<MovieListEntry key={ind} movie={movie} />) 
          }
        }) 
      )

    } else {
      ele = (
        this.props.movies.map((movie, ind) => {
          if (movie.title.toLowerCase().includes(this.props.searchterm.toLowerCase()) && movie.watched === false) {
            return (<MovieListEntry key={ind} movie={movie}/>) 
          }
        }) 
      )
    }

    return (
    <div>
    <button onClick={this.toggleWatch} className="btn btn-default">Watched</button>
    <button onClick={this.toggleUnwatch} className="btn btn-default">To Watch</button>
      <ul className="list-group">
        {ele}
        
      </ul>
    </div>

    )
  }
}  

export default Movies;