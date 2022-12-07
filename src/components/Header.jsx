import React from 'react';
import Navbar from './NavBar';

 
 function Header() {
   const newLocal = <a href='http://localhost:3001/' className='cv-btn'> Let's Start</a>;
  return (
    <div id = 'main'>
        <Navbar/>
        <div className='name'>
            <h1><span> Make your </span> Smart Contract <span> on </span> AutoCon  </h1>

            <p className='details'>Here you can create your Smart Contract without having coding skill, 
            just with the use of Graphical User Interface you can have Smart Contract </p>

            {newLocal}
          
        </div>

    </div>
  )
}

export default Header;
