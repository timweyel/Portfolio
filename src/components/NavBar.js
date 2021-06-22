import React from 'react';
import "../index.css";
import "../App.css";


const NavBar = props => {
//   const {
//     tabNames = [],
//     currentPage,
//     setCurrentPage
// } = props;
const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
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
    </nav>
  );
};

export default NavBar;