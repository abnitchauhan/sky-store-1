import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='nav-bar-wrapper'>
      <nav className='nav-bar'>
        <ul className='parent menu-level-0 '>
          <li className='menu-item menu-item-level-0'>
            <Link to='/' className='anchor'><span className='menu-text'>Home</span>
            </Link>
          </li>
          <li className='menu-item menu-item-level-0'>
            <Link to='/newtorent' className='anchor'>
              <span className='menu-text'>Movies</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </Link>
             <ul className="menu-level-1">
                <li className="menu-item menu-item-level-1" ><Link to="/newtorent" className="anchor"><span className="text">New To Rent</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/newtobuy" className="anchor"><span className="text">New To Buy</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/preorder" className="anchor"><span className="text">Pre-Order</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/movieboxsets" className="anchor"><span className="text">Movie Box Sets</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/officialfilmchart" className="anchor"><span className="text">Official Film Chart</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/browse" className="anchor"><span className="text">Browse</span></Link></li>
                <li className="menu-item menu-item-level-1" ><Link to="/atoz" className="anchor"><span className="text">A to Z</span></Link></li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <Link to='/skystorepremiere' className='anchor'>
              <span className='menu-text'>Sky Store Premiere</span>

            </Link>
          </li>
          <li className='menu-item menu-item-level-0'>
            <Link to='/under3' className='anchor'>
              <span className='menu-text'>Sale</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </Link>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1"><Link to="/superherosavings" className="anchor"><span className="text">Superhero savings</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="/storepicks" className="anchor"><span className="text">Store Picks</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="/under3" className="anchor"><span className="text">Under £3</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="/under4" className="anchor"><span className="text">Under £4</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="/under5" className="anchor"><span className="text">Under £5</span></Link></li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <Link to='/skyvipgifts' className='anchor'>
              <span className='menu-text'>Sky VIP</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </Link>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <Link to="/skyvipgifts" className="anchor"><span className="text">Sky VIP Gifts</span></Link>
              </li>
            </ul>
          </li>
          <li className='menu-item menu-item-level-0'>
            <Link to='/mostpopular' className='anchor'><span className='menu-text'>TV</span>
              <span className='menu-icon'><i className="fa-solid fa-chevron-down"></i></span>
            </Link>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1"><Link to="mostpopular" className="anchor"><span className="text">Most Popular</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="newtostore" className="anchor"><span className="text">New To Store</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="drama" className="anchor"><span className="text">Drama</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="comedy" className="anchor"><span className="text">Comedy</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="kids" className="anchor"><span className="text">Kids</span></Link></li>
              <li className="menu-item menu-item-level-1"><Link to="all" className="anchor"><span className="text">All</span></Link></li>
          </ul>
          </li> 

          <li className='menu-item menu-item-level-0 highlighted'>
            <Link to='/redeemvoucher' className='anchor'><span className='menu-text'>Redeem Voucher</span>
            </Link>
          </li> 

        </ul> 
      </nav> 
    </div>
  )
}

export default Menu
