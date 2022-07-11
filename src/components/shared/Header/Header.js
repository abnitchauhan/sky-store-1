import React from 'react'
import './Header.css';
import sky_store_logo from '../../../images/sky-logo.png' 
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <>
      <header className='head-wrapper' id='header-view'>
        <div className='header-bar'>
          <div className='header-outer-wrapper'>
            <div className='header-inner-wrapper'>
              <div className='logo-wrapper'>
                {/* Left Sidebar Hamburger */} 

                {/* Main Logo */} 
                  <a href='/' className="logo-anchor anchor">
                    <picture className='logo'>
                    <img className='main-logo' src={sky_store_logo} alt="sky_store_logo"/>
                    </picture>
                  </a> 

                {/* Right Nav Sign in  | SignUp and Search Bar */}
                <div className="header-right-container search-hidden">
                  <nav className="top-user-menu-wrapper"> 
                    <ul className="top-user-menu">
                      <li className="menu-item" data-cta="sign-in navigation-header--sign-in">
                        <a href="/" className="anchor"><span className="text">Sign In</span></a>
                      </li>
                      <li className="menu-item" data-cta="sign-up navigation-header--sign-up">
                        <a href='/' className="anchor"><span className="text">Sign Up</span></a>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="search-inner-wrapper">
                    <section className="search-input__container hide-search">
                      <div className="search-input">
                        <input type="search" className="search-input__textbox" placeholder="Search" /> 
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
