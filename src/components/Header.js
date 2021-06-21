import React from 'react';
import NavBar from './NavBar';

const Header = props => {
  const {
      tabNames = [],
      currentTab,
      setCurrentTab
  } = props;

  return (
      <header>
          <h1>Tim Weyel</h1>
          <NavBar
            tabNames = {tabNames}
            setCurrentTab = {setCurrentTab}
            currentTab = {currentTab}
          ></NavBar>
      </header>
  );
};

export default Header;
