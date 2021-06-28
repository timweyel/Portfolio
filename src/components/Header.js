import React from 'react';
import NavBar from './NavBar';
import '../../src/index.css';

const Header = () => {
    
  return (
    <header className="flex flex-row align-middle pt-6 ">
      <h1 className="name text-6xl text-left  flex-1 align-middle ">Tim Weyel</h1>
      {/* <div className="spacer"></div> */}
      <div className="navbar flex-1">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
