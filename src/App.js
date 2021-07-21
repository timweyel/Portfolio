import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import '@fontsource/roboto';

const App = () => {

  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route component={About} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Resume} exact path="/resume" />
        <Route component={Portfolio} exact path="/portfolio" />
        {/* <Route component={Contact} exact path="/contact" /> */}
      </Switch>
    <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>),
  document.getElementById('root'))


export default App;