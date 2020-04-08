
import React from "react";
import Jumbotron from "./components/jumbotron";
import SearchBar from "./components/searchBar";
import UserTable from "./components/userTable";

function App() {
  return (
    <div>
      <div className="mainContentDiv">
        <Jumbotron />
        <SearchBar />
      </div>
      <UserTable/>
    </div>
  );
}

export default App;