import React from 'react';

import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <main>
        <Header></Header>
        <Navigation></Navigation>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}


export default App;