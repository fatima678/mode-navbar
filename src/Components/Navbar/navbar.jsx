import React from 'react'
import './navbar.css'
import logo_light from '../Assets/logo-black.png';
import logo_dark from '../Assets/logo-white.png';
import search_icon_light from '../Assets/search-w.png';
import search_icon_dark from '../Assets/search-b.png';
import toggle_light from '../Assets/night.png';
import toggle_dark from '../Assets/day.png';


const navbar = () => {
  return ( 
    <div className='navbar'>
        <img src={logo_light} alt='' className='logo'></img>
        <ul>
            <li>Home</li>           
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>
        <div className="search-box">
            <input type='text ' placeholder='Search'></input> 
            <img src={search_icon_light} alt=''></img>
        </div>
           <img src={toggle_light} alt='' className='toggle-icon'></img>    
    </div>
  )
}

export default navbar
