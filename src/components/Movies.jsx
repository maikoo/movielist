import React from "react";
import MovieListEntry from "./movielistentry.jsx";

var Movies = ({movies, searchterm}) => (
  
  <ul className="list-group">
    {movies.map((movie, ind) => {
      if (movie.title.toLowerCase().includes(searchterm.toLowerCase())) {
        // console.log('something');
        return 
        <MovieListEntry 
          key={ind} 
          movie={movie} 
        />
      }
    })}
  </ul>
);
  
export default Movies;

