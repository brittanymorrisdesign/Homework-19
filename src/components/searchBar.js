import React, { useContext } from "react";
import DataAreaContext from "../utils/dataAreaContext.js";
import "../styles/searchBar.css"

const SearchBar = (props) => {
 // const context = useContext(DataAreaContext)

  return (
    <form>
    <div className="form-group search-widget">
      <div className="input-group mb-3">
  
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder='Search by last name of Employee'
          id="search"
        />
        <div className="input-group-append">
          <button onClick={props.handleFormSubmit} className="btn btn-primary" type="button" id="button-addon2">Search<i className="fas fa-search ml-2"/></button>
        </div>
      </div>
    </div>
  </form>
  );
}
export default SearchBar;