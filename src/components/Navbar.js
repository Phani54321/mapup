import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Button type="primary">MapUp</Button>
        
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>         
            <li>
              <Link className='nav-links-mobile'
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
