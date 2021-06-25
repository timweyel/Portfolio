import React from 'react';
// import ReactDOM from 'react-dom';
import NavBar from './NavBar';

const Header = () => {
    
    const tabs = ["About", "Portfolio", "Contact", "Resume"];
    return (
      <header className="flex-row">
        <h1>Tim Weyel</h1>
        <NavBar tabs={tabs} />
      </header>
    );
};

export default Header;
