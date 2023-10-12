import React from 'react'
import BookRide from './BookRide';
import { Link } from 'react-router-dom';
import ProvideService from './ProvideService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";
import Footer from './Footer';
export default function Home() {

 
  return (
    <div>
       <ToastContainer/>
      <div class="container text-center">
  <div class="row">

    <div class="col" style={{}}>
    <img src='booking.jpg' className='img-fluid'></img>
    </div>
  
  </div>
 
  <div className='row'>
    <div className='col'>
      <center>
     <Link to="/BookRide"><button className='btn btn-primary' style={{backgroundColor:'#39395f', color:'white',marginLeft:'2rem',marginTop:'0.5rem',marginBottom:'0.5rem',borderBottom:"0.4rem solid green",borderRadius:'0.7rem'}} >Book Your Ride</button></Link>
     <Link to="/ProvideService"> <button className='btn btn-primary' style={{backgroundColor:'#39395f', color:'white',marginLeft:"2rem",marginTop:"0.5rem",marginBottom:'0.5rem',borderBottom:"0.4rem solid green",borderRadius:'0.7rem'}}>Provide Service</button></Link>
      </center>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}
