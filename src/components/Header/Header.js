import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
          <nav>
            <a href="/title">World 100th Idea Contest</a>
            <a href="/text" className="text">Innovate locally, Scale Globally</a>
            <a href="/budget" className="target">Target budget : 200 million</a>
          </nav>  
        </div>
    );
};

export default Header;