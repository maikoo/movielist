import React from "react";

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      watched: false
    })
    // this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  // onChange (e) {

  // }

  toggle() {
    this.props.movie.watched = !this.props.movie.watched
    console.log(this.props.movie.watched);
    let currentVal = this.state.watched;
    this.setState({
      watched: !currentVal
    })
    console.log(this.state);
    // console.log(e.target);
  }

  render() {
    let ele;
    if (this.state.watched === true) {
      ele = (<div>Watched</div>)
    }

    return (
      <div>
        <div>
          <li onClick={this.toggle}
          className="list-group-item movie-list-entry"
          >
            {this.props.movie.title}
            {ele}
            
          </li>
        </div>
      </div>

    )
  }
}

export default MovieListEntry;
