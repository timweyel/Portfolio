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


{/* <h1 className="md:text-6xl sm:text-xl flex-1 md:f-500 ">Tim Weyel</h1>
<div className="flex-1 "> */}