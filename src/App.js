
import React, { useEffect, useState} from "react";
import axios from "axios";
import DataAreaContext from "./utils/dataAreaContext"
import Table from "./components/table"
import Jumbotron from "./components/jumbotron";
import SearchBar from "./components/searchBar";


function App() {
  const [personsState, setPersonsState] = useState([]);
  
      useEffect(() => {
      axios.get(`https://randomuser.me/api/?results=20&nat=us`)
          .then(res => {
          const personsArr  = res.data.results;
          setPersonsState(personsArr);
          })
      }, [] );
      
      return (
      <DataAreaContext.Provider value={personsState}>
      <div>
          <Jumbotron />
          <SearchBar />
          <Table />
      </div>   
      </DataAreaContext.Provider>     
      );
  }
  
  export default App;  