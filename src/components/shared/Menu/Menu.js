import React from 'react'
import './Menu.css';


const Menu = () => {
  return (
    <div className='nav-bar-wrapper'>
      <nav className='nav-bar'>
        <ul className='parent menu-level-0 '>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>Home</span>
            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'>
              <span className='menu-text'>Movies</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>Sky Store Premiere</span>
            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>Sale</span>
            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>Sky VIP</span>
            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>TV</span>
            </a>
          </li> 

          <li className='menu-item menu-item-level-0 highlighted'>
            <a href='/' className='anchor'><span className='menu-text'>Redeem Voucher</span>
            </a>
          </li> 

        </ul> 
      </nav> 
    </div>
  )
}

export default Menu
