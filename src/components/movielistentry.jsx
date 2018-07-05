import React from "react";

var MovieListEntry = (props) => (
  <li className="list-group-item movie-list-entry">
    {props.movie.title}
  </li>

);

export default MovieListEntry;
