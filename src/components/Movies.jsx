import React from "react";
import MovieListEntry from "./movielistentry.jsx";

var Movies = (props) => (
  
  <ul className="list-group">
    {props.movies.map((movie, ind) =>
      <MovieListEntry key={ind} movie={movie}/>
    )}
  </ul>
);
   
export default Movies;

// window.Movies = Movies;