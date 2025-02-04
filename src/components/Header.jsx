import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Auto mechanics serving Ottawa motorists since 1989</h1>
                {/* <p>Your journey to excellence starts here.</p> */}
                <button className="button">BOOK APPOINTMENT</button>
            </div>
        </header>
    );
};

export default Header;