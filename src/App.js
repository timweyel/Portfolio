import React, { useState } from 'react';
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

  // const [currentTab, setCurrentTab] = useState(tabs[0]);
  // const [tabs] = useState([
  //   {
  //     About,
  //     Portfolio,
  //     Contact,
  //     Resume 
  //   }
  // ]);

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Switch>
        <div>
          {/* <Header /> */}
          <main>
            <About />
            <Portfolio />
          </main>
          <Footer />
        </div>
    </Router>
  )
}

export default App;