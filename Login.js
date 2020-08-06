import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [loginEmployee, setLoginEmployee] = useState([]);
    const [user, setUser] = useState([{
        email: '',
        password: ''
    }]);

    const loginList = () => {
        axios.get('http://localhost:8080/employee/login/v1/api/findall')
            .then(res => {
                res.data.map(data => {
                    return data.email === user.email && data.password === user.password ? 
                    (localStorage.setItem('jwt', user),
                    history.push('/listemployee')) : console.log("Invalid")
                })
                
            })
    }

    const handleInputLogin = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    return (
        <>
        { localStorage.removeItem('jwt') }
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter email"
                    name="email" value={user.email} onChange={handleInputLogin} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter password"
                    name="password" value={user.password} onChange={handleInputLogin} />
            </div>
            <div>
                <button onClick={loginList}>Login</button>
            </div>
        </>
    );
}

export default Login;