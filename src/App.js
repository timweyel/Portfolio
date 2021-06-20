import React, { Component } from 'react';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';
//import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Footer from './components/Footer';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography
            >
              Tim Weyel
           </Typography>
           <NavBar />
          </Toolbar>
        </AppBar>
        <About />
        <Portfolio />
        <Contact />

      </div>
    );
  }
}
export default App;

{/* <Router>
<Switch>
  <Route exact path="/" component={Header} />
  <Route path="/portfolio" component={Portfolio} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
</Switch>
      </Router> */}