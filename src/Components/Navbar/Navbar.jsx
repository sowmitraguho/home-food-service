import React from 'react';
import { Link } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo">
                <h2>Home Food</h2>
            </div>
            <div className="nav-menu">
                <ul className="nav-links">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link>Food Menu</Link>
                    </li>
                    <li className="nav-link">
                        <Link>Order</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="nav-link">
                        <Link>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="login">
                <button className='btn'>Sign In</button>
                <button className='btn'>Register</button>
            </div>

        </nav>
    );
};

export default Navbar;