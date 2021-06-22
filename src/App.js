import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import "./App.css";
import "./index.css";

function App() {

  // const [tabNames] = useState([
  //   {name: 'About'},
  //   {name: 'Portfolio'},
  //   {name: 'Resume'},
  //   {name: 'Contact'}
  // ]);

  // const [currentPage, setCurrentPage] = useState(tabNames[0]);
  // console.log('current page', currentPage.name);

  return (
    <div>
      <Header
        // tabNames = {tabNames}
        // setCurrentTab = {setCurrentPage}
        // currentTab = {currentPage.name}
      ></Header>
      <main>
     
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;