import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, redirect } from 'react-router-dom'
//import Profile from './Profile';

import Feedback from './Feedback';
import ProvideService from './ProvideService';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import Home from './Home';
let x=0;
export default function NavRide() {
   
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {isAuthenticated}=useAuth0();
    const {user}=useAuth0();
    const navigate=useNavigate();

   
  return (
    <div  style={{marginBottom:"8rem"}}>

      

      {/* {isAuthenticated && navigate('/home')} */}
    
      <nav className="navbar navbar-dark  fixed-top" style={{backgroundColor:"#272727"}}>
  <div className="container-fluid" >
    <h1 style={{color:'white'}}><b>RideReady</b></h1>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">RideReady</h5>
             
            
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <center><div className="container" style={{marginTop:"0.5rem"}}>
        {isAuthenticated && <p style={{color:'white',marginRight:'1rem',marginTop:"0.9rem"}}><img style={{borderRadius:'50%',height:'4rem',marginBottom:"0.2rem"}} src={user.picture} alt={user.name} /><br></br>{user.name} </p>}
        </div></center>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
         

          <div className="col" style={{}}>
      
      <center>{isAuthenticated?<li><button whileHover={{scale:1.1}} style={{marginRight:"1rem",marginTop:'2rem',marginBottom:'1rem'}} className="bn5" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }><center><b> Log Out</b></center></button></li>: <li><button whileHover={{scale:1.1}} className="bn5" style={{marginRight:"1rem",marginTop:'5rem',marginBottom:'2rem'}} onClick={() =>loginWithRedirect() }><center><b>Log In</b></center></button></li>}</center>
      

   </div>
        
        <li style={{visibility:'hidden'}}>
        {isAuthenticated && (x+=1)}</li>
  

        <li className="nav-item">
            <NavLink  className="nav-link" to="/Home"><b>Home</b></NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/Feedback"><b>Give Feedback</b></NavLink>
          </li>
          
         

        </ul>
   
      </div>
    </div>
  </div>

</nav>
{
          x==1?navigate('/home'):null
      }
      {/* {x+=1} */}
    </div>
  )
}
