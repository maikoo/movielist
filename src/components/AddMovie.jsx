import React from "react";

const AddMovie = () => (
  <div>
    <form className="navbar-form navbar-left" role="search">
      <div className="form-group">
        <input
          // onChange={props.onChange}
          type="text" className="form-control"
          placeholder="Search"
        >
        </input>
      </div>
      <button type="submit" className="btn btn-default">Add</button>
    </form>
  </div>
);


export default AddMovie;