import React from "react";


function UserTable(props) {
  return (
    <tr>
      <td>
        <img alt={props.fullName} className="img-fluid" src={props.imgSrc} style={{ margin: "0 auto" }} />
      </td>
      <td>
        <p>{props.fullName}</p>
      </td>
      <td>
        <p>{props.phone}</p>
      </td>
      <td>
        <p>{props.email}</p>
      </td>
      <td>
        <p>{props.birthdate}</p>
      </td>
    </tr>
  );
}

export default UserTable;