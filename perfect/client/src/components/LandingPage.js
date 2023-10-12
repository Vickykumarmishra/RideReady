import React from 'react'

import { BrowserRouter, NavLink,Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect';

export default function LandingPage() {
 
  const myStyle={
    backgroundImage: "url(/bike2.jpg)",
    height:'100vh',
    marginTop:'-80px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', // This centers the image both horizontally and vertically
    
};

  return (
    
    <div style={myStyle}>
      <div className="container text-center"   style={{color:'#39395f',fontSize:'2rem',fontFamily:'tahoma',marginTop:'5rem'}}  >

<div className='row'>
  <div className='col'>
{/* <h1  style={{color:'#416a59'}}> <b >RideReady </b></h1> */}
        {/*<h1  
         style={{color:'white',fontSize:'5rem',fontFamily:'tahoma',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}} data-aos="fade-left"  data-aos-duration="2000">Vicky Kumar Mishra</h1> */}

<b><Typewriter
      options={{
        strings: ['Gateway to On-Demand Transportation', 'Trusted Partner for Effortless Journeys'],
        autoStart: true,
        loop: true,
      }}
     
    /></b></div>
    </div>
  
  
</div>
 
</div>
  )
}
