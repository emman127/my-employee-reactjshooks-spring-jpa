import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const { employee, removeEmployee } = useContext(EmployeeContext);

    const list = employee.length ? (employee.map((emp, index) => {
        return <tr key={index}>
            <td>{emp.id}</td>
            <Link to={`/listemployee/${emp.id}`}><td>{emp.fullname}</td></Link>
            <td>{emp.age}</td>
            <td>{emp.position}</td>
        </tr>
    })) : (<tr>
        <td>You dont have a Employee</td>
    </tr>)
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FULLNAME</th>
                        <th>AGE</th>
                        <th>POSITION</th>
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