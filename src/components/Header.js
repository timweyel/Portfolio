import React from 'react';
import NavBar from './NavBar';
import '../../src/index.css';

const Header = () => {
    
  return (
    <header className="flex-row">
      <h1 className="name">Tim Weyel</h1>
      <div className="spacer"></div>
      <div className="navbar">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
