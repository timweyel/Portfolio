// import React, { useState } from 'react';
// import Header from './components/Header';
// import NavBar from './components/NavBar';
// import About from './components/About';

// import Contact from './components/Contact';
// // import Resume from './components/Resume';
// import Footer from './components/Footer';
// import "./App.css";
// import "./index.css";

// function App() {

//   return (
//     <div>
//       <Header></Header>
      

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App = () => {

    return (
      <div>
        <header>
          <Header />
        </header>
          <main>
            <Portfolio />
            {/* <About /> */}
            {/* <Contact /> */}
        </main>
      </div>
    )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App;