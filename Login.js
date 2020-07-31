import React from 'react';

const Login = () => {
    const btnLogin = () => {
        const data = {
            key: '',
            value: ''
        }
        localStorage.setItem('jwt', data)
    }
    return (
        <>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
            </div>
            <div>
                <button onClick={btnLogin}>Login</button>
            </div>
        </>
    );
}

export default Login;