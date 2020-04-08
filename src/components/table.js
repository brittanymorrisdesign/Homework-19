import React from "react";
import UserTableResults from "./userTableResults"
import "../styles/table.css"

const Table = () => {
    
return (
<div class="table-responsive">
<table className="table table-striped table-resposive text-center table-hover">
    <thead>
    <tr>
    <th scope="col">Image</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Date of Birth</th>
    </tr>
</thead>
      <UserTableResults />
    </table>
  </div>
);
}

export default Table;
