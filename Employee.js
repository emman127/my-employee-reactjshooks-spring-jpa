import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useParams, useHistory} from 'react-router-dom';

const Employee = () => {
    const { editEmployee } = useContext(EmployeeContext);
    const [ employeeRecord, setEmployeeRecord ] = useState([]);
    const { id, fullname, age, position } = employeeRecord;
    const param = useParams();
    const history = useHistory();

    useEffect(() => {
        let id = param.id
        axios.get(`http://localhost:8080/employee/v1/api/findById/${id}`)
        .then(res => setEmployeeRecord(res.data))

        // eslint-disable-next-line
    },[])

    const updateEmployee = (e) => {
        e.preventDefault();
        editEmployee(id, fullname, age, position)
        history.push('/listemployee')
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setEmployeeRecord({...employeeRecord, [name]: value});
    }

    return (
        <>
            <div>
            <h3>Personal Record</h3>
                <form onSubmit={updateEmployee}>
                <div>
                    <input type="text" name="id" value={id} onChange={handleInput}/>
                </div>
                <div>
                    <input type="text" name="fullname" value={fullname} onChange={handleInput}/>
                </div>
                <div>
                    <input type="text" name="age" value={age} onChange={handleInput}/>
                </div>
                <div>
                    <input type="text" name="position" value={position} onChange={handleInput}/>
                </div>
                <div>
                    <input type="submit" value="Edit" />
                </div>
                </form>
            </div>
        </>
    );
}

export default Employee;