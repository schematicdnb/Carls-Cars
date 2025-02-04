import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create a corresponding CSS file for styling
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Carl's Cars</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/mechanics">Mechanics</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="book-online">
                    <Link to="/book">Book Online</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;