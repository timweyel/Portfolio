import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import "../index.css";
import "../App.css";

const NavBar = ({tabs}) => {
// handlePageChange() {
//   alert('I am event handler');
// }
console.log(tabs);
  return (
    <div className="navbar">
      <ul className="flex-row">
      {tabs && tabs.map(tab => (
        <li key = {tab}>
          <a
            href={'#' + tab.toLowerCase()} 
            onClick={() => tab.handlePageChange(tab)}
            className={
              tab.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default NavBar;