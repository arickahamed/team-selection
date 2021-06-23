import React from 'react';
import logoImg from '../../img/BCB.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="top-container">
            <div className="logo-section">
                <img src={logoImg} alt="bcb logo" />
            </div>
            <div className="heading-section">
                <h1>Bangladesh Cricket Board</h1>
                <p>Let's select the team</p>
            </div>
        </div>
    );
};

export default Header;