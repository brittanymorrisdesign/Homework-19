import React, { useContext } from "react";
import DataAreaContext from "../utils/dataAreaContext";

//npm package to reformat DOB
import DateFormat from 'dateformat';

const UserTableResults = () => {
    const persons = useContext(DataAreaContext)

return (
    
<tbody>
{persons.map ((person, index) => {
    return (
        <tr key={index}>
            <td> <img className="rounded-circle"src={person.picture.thumbnail} alt=""/> </td>
            <td>{person.name.first} {person.name.last} </td>
            <td>{person.email} </td>
            <td>{person.phone} </td>
            <td>{DateFormat(person.dob.date, "mediumDate")}</td>     
        </tr>
    );
})}

</tbody>

);
}

export default UserTableResults;

