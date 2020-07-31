import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const AddEmployee = () => {
    const { addEmployee } = useContext(EmployeeContext);

    const formValue = {
        fullname: '', age: '', position: ''
    }
    const [ form, setForm ] = useState(formValue); 
    const { fullname, age, position } = form

    const handleInput = e => {
        const { name, value } = e.target
        setForm(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const submitForm = e => {
        e.preventDefault();
        addEmployee(fullname, age, position);
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <input type="text" placeholder="Enter fullname" name="fullname"
                        value={fullname} onChange={handleInput}/>
                </div>
                <div>
                    <input type="number" placeholder="Enter age" name="age"
                        value={age} onChange={handleInput}/>
                </div>
                <div>
                    <input type="text" placeholder="Enter position" name="position"
                        value={position} onChange={handleInput}/>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    );
}

export default AddEmployee;