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
             <ul className="menu-level-1">
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">New To Rent</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">New To Buy</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">Pre-Order</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">Movie Box Sets</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">Official Film Chart</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">Browse</span></a></li>
                <li className="menu-item menu-item-level-1" ><a href="/" className="anchor"><span className="text">A to Z</span></a></li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'>
              <span className='menu-text'>Sky Store Premiere</span>

            </a>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'>
              <span className='menu-text'>Sale</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </a>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Superhero savings</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Store Picks</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Under £3</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Under £4</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Under £5</span></a></li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'>
              <span className='menu-text'>Sky VIP</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </a>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <a href="/" className="anchor"><span className="text">Sky VIP Gifts</span></a>
              </li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <a href='/' className='anchor'><span className='menu-text'>TV</span>
            </a>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Most Popular</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">New To Store</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Drama</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Comedy</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">Kids</span></a></li>
              <li className="menu-item menu-item-level-1"><a href="/" className="anchor"><span className="text">All</span></a></li>
          </ul>
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
