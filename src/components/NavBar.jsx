import React, { useState } from 'react';
import logo from '../images/logo.png';
import logo1 from '../images/autocon logo-01.jpg';
import logomain from '../img/autocon.png';


export default function NavBar() {

    const [nav , setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setnav(true);

        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>

         <a href='#' className='logo'>
            <img src ={logomain} alt = ''/>
         </a>
         <input type= 'checkbox' className = 'menu-btn' id = 'menu-btn'/>
         <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon'></span>
         </label>

         <ul className='menu'>
            <li><a href='#' className='active'>Home</a></li>
            
            <li><a href='#'>Get On Top</a></li>
         </ul>
    </nav>
  )
}