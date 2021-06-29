import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    
  return (
    <header className="flex-row align-middle pt-6">
      <h1 className="sm:text-3xl">Tim Weyel</h1>
      <div className="navbar flex-row">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;