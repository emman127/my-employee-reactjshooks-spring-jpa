import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Employee = () => {
    const [ personal , setPersonal ] = useState([]);
    const param = useParams();

    const personalRecord = () => {
        let id = param.id
        axios.get(`http://localhost:8080/employee/v1/api/findById/${id}`)
        .then(res => setPersonal(res.data))
    }

    return (
        <>
        { personalRecord }
            <h3>Personal Record</h3>
            { console.log(personal) }
            <div>
                {/* { personal.map(person => <p>{ person.fullname }</p>) }  */}
            </div>
        </>
    );
}

export default Employee;