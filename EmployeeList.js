import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const { employee, removeEmployee } = useContext(EmployeeContext);

    const list = employee.length ? (employee.map((emp, index) => {
        return <tr key={index}>
            <td>{emp.id}</td>
            <td>{emp.fullname}</td>
            <td>{emp.age}</td>
            <td>{emp.position}</td>
            <td><Link to={`listemployee/${emp.id}`}><button>Edit</button></Link>|<button onClick={() => removeEmployee(emp.id)}>Delete</button></td>
        </tr>
    })) : ''

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FULLNAME</th>
                        <th>AGE</th>
                        <th>POSITION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    { list }
                </tbody>
            </table>
        </>
    );
}

export default EmployeeList;