import React from "react";
//import DataAreaContext from "../utils/dataAreaContext.js";
import "../styles/searchBar.css"

const SearchBar = (props) => {
//const context = useContext(DataAreaContext)

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
          placeholder='Search directory for Employee'
          id="search"
        />
      </div>
    </div>
  </form>
  );
}
export default SearchBar;