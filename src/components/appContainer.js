import React, { Component } from "react";
import UserTable from "./userTable";
import API from "../utils/api";


class appContainer extends Component {
  state = {
    employees: [],
  };

// When this component mounts, search random API for pictures of people
  componentDidMount() {
    API.search()
    .then(res => {
      this.setState({ employees: res.data.results });
    })
    .catch(err => console.log(err));
  }

  componentDidMount = query => {
    API.search(query)
      .then(res => this.setState({ userData: res.data.results, originalUserData: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.findUsers(value);
    this.setState({
      [name]: value
    });
  }

  // this is only an ascending sort
  sortBy = colName => {
    let userDataCopy = [...this.state.userData];
    userDataCopy.sort((a, b) => {
      let aCol;
      let bCol;
      switch(colName) {
        case "name":
          aCol = a.name.first.toUpperCase() + a.name.last.toUpperCase();
          bCol = b.name.first.toUpperCase() + b.name.last.toUpperCase();
          break;
        case "phone":
          // TBD: strip out non-numeric characters
          aCol = a.phone;
          bCol = b.phone;
          break;
        case "email":
          aCol = a.email;
          bCol = b.email;
          break;
        case "dob":
          aCol = a.dob.date;
          bCol = b.dob.date;
          break;
        default: return console.log("nothing to sort");
      }
      
      if (aCol < bCol) {
        return -1;
      }
      if (aCol > bCol) {
        return 1;
      }
      return 0;
    })
    this.setState({userData: userDataCopy});
  }

  findUsers = str => {
    str = str.toUpperCase();
    let userDataCopy = [...this.state.originalUserData].filter(user => {
      let fullname = user.name.first.toUpperCase() + " " + user.name.last.toUpperCase();
      console.log("fullname", fullname);
      return fullname.startsWith(str);
    })
    this.setState({userData: userDataCopy});
  }

  render() {
    return (
      <div className="container">
        <div>
            <thead>
              <tr>
                <th scope="row">Image</th>
                <th scope="row" onClick={()=>this.sortBy("name")}>Name</th>
                <th scope="row" onClick={()=>this.sortBy("phone")}>Phone</th>
                <th scope="row" onClick={()=>this.sortBy("email")}>Email</th>
                <th scope="row" onClick={()=>this.sortBy("dob")}>DOB</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map(user => (
                <UserTable
                  id={user.login.uuid}
                  key={user.login.uuid}
                  imgSrc={user.picture.thumbnail}
                  firstName={user.name.first}
                  lastName={user.name.last}
                  fullName={user.name.first + " " + user.name.last}
                  phone={user.phone}
                  email={user.email}
                  birthdate={user.dob.date}
                  />
              ))}
            </tbody>
        </div>
      </div>
    );
  }
}

export default appContainer;