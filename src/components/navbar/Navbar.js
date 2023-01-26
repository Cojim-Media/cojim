import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import img from '../../img/logo.png';
import { NavMenuList } from './NavData';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={img} alt="Logo" />
      </Link>
      {/* for the mobile icons */}
      <div className="ham-menu" onClick={handleclick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      {/* For the nav menu */}
      <div>
        <ul className={click ? 'menu-list active' : 'menu-list'}>
          {NavMenuList.map((menu, key) => {
            return (
              <li className="menu-items">
                <Link
                  className="menu-link"
                  onClick={closeMobileMenu}
                  to={menu.link}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
