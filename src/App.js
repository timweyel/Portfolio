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

  return (
    <div>
      <Header></Header>
      
      <main>
        <NavBar />
        {/* <Portfolio /> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;