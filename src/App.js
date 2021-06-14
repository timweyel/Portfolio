import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";



function App() {

  return (
    <div>
      <Header />
      <About />
    </div>
  );
}


export default App;

{/* <Router>
<Switch>
  <Route exact path="/" component={Header} />
  <Route path="/projects" component={Projects} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
</Switch>
<div>


    some stuff about me
  <main>
    <Projects></Projects>
    
  </main>
<Footer />
</div>
</Router> */}