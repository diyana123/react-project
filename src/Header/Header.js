import React from 'react';
import { Fragment } from "react";
import { Link } from 'react-router-dom';
// import { Outlet, Link } from "react-router-dom";
// import './Header.scss'
import logo from '../assets/logo.webp'


function Header() {
  return (
    <Fragment>
      <div className="navigation">
        {/* <Link className="logo-container" to="/"> */}
        <Link className='logo-container' to ='/'>
        <div className="logo">
            <img src={logo} alt="" style = {{width:180}} />
          </div>
        </Link>
        <div class = "main-menu">
          <div className='left'>
          <ul>
            <li>
              <a href = "">Scooters</a>
            </li>

            <li>
              <a href = "">Wheelchairs</a>
            </li>
            <li>
              <a href = "">Mopeds</a>
            </li>
            <li>
              <a href = "">Strollers</a>
            </li>
            <li>
              <a href = "">Slingshots</a>
            </li>
            <li>
              <a href = "">Medical</a>
            </li>
            <li>
              <a href = "">Party</a>
            </li>
          </ul>
          </div>
         
          <div className='right'>
            <ul>
              <li>
                <Link to='/signIn' >  Login</Link>
              
              </li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
       

      
  
  
        
        {/* </Link> */}

   
      </div>

   
    </Fragment>
  );
  
}

export default Header