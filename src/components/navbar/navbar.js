import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-scroll'
import logo from '../../assets/K.png'
import contact from '../../assets/contact.png'
import Menu from '../../assets/menu.png'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
     <img src={logo} alt='logo' className='logo'></img>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuList'>PortFolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contact} alt='' className='contactMenuImg'/>
          Contact Me
        </button>

        <img src={Menu} alt='Mobmenu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}></img>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='menuList' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='menuList' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='menuList' onClick={()=>setShowMenu(false)}>PortFolio</Link>
          <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='menuList' onClick={()=>setShowMenu(false)}>Contact Me</Link>
        </div>

    </nav>
  )
}

export default Navbar;
