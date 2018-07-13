import React from "react";

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      watched: false
    })
    this.onChange = this.onChange.bind(this);
  }
  onChange (e) {
    this.setState({
      watched: true
    })
    console.log(this.state);
  }
  render() {
    let ele;
    if (this.state.watched === false) {
      ele = (<div><li className="list-group-item movie-list-entry">
        {this.props.movie.title}

      </li>
        <button onClick={this.onChange}>Toggle</button></div>)
    }

    return (
      <div>
        {ele}
      </div>

    )
  }
}

export default MovieListEntry;
