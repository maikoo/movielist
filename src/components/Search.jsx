import React from "react";

var Search = (props) => (
  // <div>Search renders</div>
  <div>
    <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
        <input 
          onChange={props.onChange} 
          type="text" className="form-control" 
          placeholder="Search"
        >
        </input>
      </div>
        <button onClick={props.onClick} type="submit" className="btn btn-default">Go!</button>
    </form>
  </div>
  
);

export default Search;