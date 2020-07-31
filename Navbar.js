import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none'
    }
    return (
        <div>
            <nav>
                <ul>
                    <Link to="/" style={linkStyle}>
                        <li>Home</li>
                    </Link>
                    <Link to="/addemployee" style={linkStyle}>
                        <li>Add Employee</li>
                    </Link>
                    <Link to="/listemployee" style={linkStyle}>
                        <li>List Employee</li>
                    </Link>
                     <Link to="/login" style={linkStyle}>
                        <li className="right">Login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;