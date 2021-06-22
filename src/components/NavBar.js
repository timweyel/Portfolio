import React from 'react';
import "../index.css";
import "../App.css";

function NavBar(props) {

const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <ul className="flex-row">
      {tabs.map(tab => (
        <li key = {tab}>
          <a
            href={'#' + tab.toLowerCase()} 
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;