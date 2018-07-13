import React from "react";

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      watched: false,
      rating: "Rating: " + this.props.movie.rating,
      year: "Year: " + this.props.movie.year,
      imdb: "imdb: " + this.props.movie.IMDB
    })
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // let currentVal = this.state.watched;
    // this.setState({
    //   watched: !currentVal
    // })
    // console.log(this.state);
    this.props.movie.watched = !this.props.movie.watched
    // console.log(this.props.movie.watched);
  }

  toggle() {
    let currentVal = this.state.watched;
    this.setState({
      watched: !currentVal
    })
    // console.log(this.state);
  }

  render() {
    let movieDetails;
    let watchEle;
    if (this.state.watched === true) {
      if (this.props.movie.watched === false) {
        watchEle = (
          <div 
            onClick={this.handleClick}
            style={{ color: 'green' }}
          >
          Watched
          </div>
        )
      } else {
        watchEle = (
          <div
            onClick={this.handleClick}
            style={{ color: 'black' }}
          >
            Watched
          </div>
        )
      }
      movieDetails = (
        <div>
          {/* <button onClick={this.handleClick} 
          style={{color:'green'}}
          >
          Watched
          </button> */}
          {watchEle}
          <div>{this.state.rating}</div>
          <div>{this.state.year}</div>
          <div>{this.state.imdb}</div>
          
        </div>
      )
    }

    return (
      <div>
        <div>
          <li onClick={this.toggle}
          className="list-group-item movie-list-entry"
          >
            {this.props.movie.title}
            {movieDetails}
            
          </li>
        </div>
      </div>

    )
  }
}

export default MovieListEntry;
