import React from "react";
import UserTableResults from "./userTableResults"

const Table = () => {
    
return (
    <table className="table table-striped text-center table-hover">
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
);
}

export default Table;