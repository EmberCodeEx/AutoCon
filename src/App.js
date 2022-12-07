import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import About from './components/About';
import presentation from './components/presentation';
import Contact from './components/Contact';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import aboutimage2 from './images/presentation.png';
import aboutimage3 from './images/Ethereum-Logo.png';
import aboutimage4 from './images/s2.png';
import aboutimage5 from './images/development.png'; 


function App() {
  return (
    <div className="App">
      <Header/>
     
      <Feature/>
      <a href="http://localhost:3002/" target="_blank" rel="noreferrer">
      <About image = {aboutimage5} title = 'Time saving Solution' button = ' For Beginners' />
    
 
  </a>

      <presentation image = {aboutimage5} title = 'AutoCon ' />   

      <About image = {aboutimage4} title = 'Lets code without coding' button = 'AutoCon Documentation' />
      <Contact />

      </div>
  );
}

export default App;
