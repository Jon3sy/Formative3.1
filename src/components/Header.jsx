import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'
import MobileMenu from './MobileMenu'

const Header = () => {

  const [menuIsOpen, openMenu] = useState(false)

  const toggleMobileMenu = () => {
    openMenu(!menuIsOpen);
    document.body.classList.toggle('no-scroll');
  }
  return (
   <>
      <div id='topnav'>
        <div id='logo'>

        </div>

        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        <div id='menu-container'>
          <div id='menu-button' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
            <List id='hamburger-icon'/>
          </div>
        </div>

      </div>

      {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}

    </>
  )
}

export default Header
