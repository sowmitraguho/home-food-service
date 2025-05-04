import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"
import { SiFoodpanda } from "react-icons/si";
import { BiSolidBowlHot } from "react-icons/bi";


const Navbar = () => {
    return (
        <nav>
            <div className="nav-logo flex items-center  gap-1">
                <SiFoodpanda className='' />
                <h2 className='uppercase text-2xl font-bold'>Khadok</h2>
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
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="login">
                <button className='btn flex items-center'><BiSolidBowlHot className='mr-2' />
                <NavLink className="navbar-link" to="/signup">Login</NavLink>
                </button>
               
            </div>

        </nav>
    );
};

export default Navbar;