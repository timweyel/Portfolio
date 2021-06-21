import React from 'react';
import "../index.css";
import "../App.css";


const NavBar = props => {
  const {
    tabNames = [],
    currentTab,
    setCurrentTab
} = props;

  return (
    <nav>
      <ul className="flex-row">
        {tabNames.map((tab) => (
          <li className={`col ${currentTab === tab.name && 'navActive'}`} key = {tab.name}>
            <span onClick={() => setCurrentTab(tab)}>{tab.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;