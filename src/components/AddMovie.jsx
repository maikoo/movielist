import React from "react";

const AddMovie = (props) => (
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
      <button onClick={props.onClick} type="submit" className="btn btn-primary">Add</button>
    </form>
  </div>
);


export default AddMovie;