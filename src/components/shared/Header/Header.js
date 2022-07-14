import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import sky_store_logo from '../../../images/sky-logo.png' 
import Menu from '../Menu/Menu';

const Header = () => { 
  const [activeSearch, setActiveSearch] = useState(false); 
  const addFocusHandler = () =>{
    setActiveSearch(true);
  } 
  const removeFocusHandler = () =>{
    setActiveSearch(false);
 }

  return (
    <>
      <header className='head-wrapper' id='header-view'>
        <div className='header-bar'>
          <div className='header-outer-wrapper'>
            <div className='header-inner-wrapper'>
              <div className='logo-wrapper'>
                {/* Left Sidebar Hamburger */} 

                {/* Main Logo */} 
                  <Link to='/' className="logo-anchor anchor">
                    <picture className='logo'>
                    <img className='main-logo' src={sky_store_logo} alt="sky_store_logo"/>
                    </picture>
                  </Link> 

                {/* Right Nav Sign in  | SignUp and Search Bar */}
                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper"> 
                    <ul className="top-user-menu">
                      <li className="menu-item" data-cta="sign-in navigation-header--sign-in">
                        <Link to="/signin" className="anchor"><span className="text">Sign In</span></Link>
                      </li>
                      <li className="menu-item" data-cta="sign-up navigation-header--sign-up">
                        <Link to='/signup' className="anchor"><span className="text">Sign Up</span></Link>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input type="search" className={`search-input__textbox ${activeSearch?'focused':''}`} placeholder ={activeSearch ?"Search for title,actors,directors":"Search"} onClick={addFocusHandler} onBlur ={removeFocusHandler}/> 
                        <span className="search-active"><i className="fa-solid fa-magnifying-glass"></i></span>
                      </div>
                    </section>
                  </div>
                   
                </div> 
              </div>
            </div>

          {/* Lower Main Navigation */} 
               <Menu /> 
          </div>
        </div> 
      </header>
    </>
  )
}

export default Header
