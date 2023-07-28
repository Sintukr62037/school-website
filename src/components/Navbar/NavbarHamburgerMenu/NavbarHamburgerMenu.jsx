import React, { useContext,useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavbarHamburgerMenuContext } from './NavbarHamburgerMenuContext';
import './NavbarHamburgerMenu.scss';
import { Link } from 'react-router-dom';
import logo from 'assets/images/2.jpeg';
import admission_form from 'assets/form/admission.pdf';

const NavbarHamburgerMenu = () => {
  const [loggedin,setLoggedIn] = useState(localStorage.getItem('loggedin'));
  const context = useContext(NavbarHamburgerMenuContext);

  const signout = () => {
    console.log("reached logout");
    localStorage.removeItem('loggedin');
    localStorage.removeItem('user');
    setLoggedIn(null);
  }//func

  return (
    <div className="NavbarHamburgerMenu">
      <Menu
        className="navbar-mobile-menu"
        isOpen={context.isMenuOpen}
        onStateChange={(state) => context.stateChangeHandler(state)}
        right
        width={330}
      >
        <div className="nav-mobile-top-group">
          <div className="nav-mobile-logo-and-close-menu">
            <div className="nav-mobile-logo">
              <Link to="/" onClick={context.toggleMenu}>
                <img src={logo} alt="SRIJAN Play Way" style={{width:'5rem',height:'3rem'}} />
                {/* <p>
                 SRIJAN Play Way <br /> 
                </p> */}
              </Link>
            </div>

            <div className="nav-mobile-close-menu" onClick={context.toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="48px"
                height="48px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
              </svg>
            </div>
          </div>

          <ul className="nav-mobile-links" style={{fontWeight:'700'}}>
            <li>
              <Link to="/about" onClick={context.toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
            {
              loggedin?
              <Link to="/events" onClick={context.toggleMenu}>
                Events
              </Link>:
              null
            }
            </li>
            <li>
              <Link to="/notices" onClick={context.toggleMenu}>
                Notices
              </Link>
            </li>
            <li>
            {
              loggedin?
              <Link to="/gallery" onClick={context.toggleMenu}>
                Gallery
              </Link>:
              null
              } 
            </li>
            <li>
            {
              loggedin?
              <Link to="/holidays" onClick={context.toggleMenu}>
                Holidays
              </Link>:
              null
              } 
            </li>
            <li>
              {
              loggedin?
              <Link to="/contact" onClick={context.toggleMenu}>
                Contact
              </Link>:
              null
              } 
            </li>
          </ul>
        </div>

        {
          loggedin?
          <Link
          className="nav-mobile-button download"
          to={admission_form}
          target="_blank"
          >
          Download Admission Form
          </Link>:null
        }
        {
          loggedin? 
          <Link
          className="nav-mobile-button signout"
          to="#"
          onClick={() => signout()}
          >
           Signout
          </Link>:
          <Link
            className="nav-mobile-button signin"
            to="/join"
            onClick={context.toggleMenu}
          >
            Login / Signup
          </Link>
        }
      </Menu>
    </div>
  );
};

export default NavbarHamburgerMenu;
