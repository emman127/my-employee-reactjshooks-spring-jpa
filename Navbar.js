import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const linkStyle = {
        textDecoration: 'none'
    }
    return (
        <>
            <nav>
                <ul>

                    <Link to="/" style={linkStyle}>
                        <li>Home</li>
                    </Link>
                    {localStorage.getItem('jwt') ?
                        <>
                            <Link to="/addemployee" style={linkStyle}>
                                <li>Add Employee</li>
                            </Link>
                            <Link to="/listemployee" style={linkStyle}>
                                <li>List Employee</li>
                            </Link>
                        </> : '' }
                    {localStorage.getItem('jwt') ?
                        <Link to="/login" style={linkStyle}>
                            <li className="right">logout</li>
                        </Link>
                        : <Link to="/login" style={linkStyle}>
                            <li className="right">login</li>
                        </Link> }
                </ul>
            </nav>
        </>
    );
}

export default Navbar;