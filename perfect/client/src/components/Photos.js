import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookRide from './BookRide';
import axios from 'axios';
export default function Photos() {
    const [allImage, setAllImage] = useState(null); 


    useEffect(()=>{
        getImage();
    },[])
    const getImage = async () => {
      axios.get("http://localhost:8000/get-image")
      .then(response => {
     
        setAllImage(response.data);
      
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

      };
    
    
  return (
    <center>
    <div className='container-fluid' >
     <center>
      <div className="container" >
  <div className="row">
    
    <div className="col" >
  
      { allImage == null?<p>...Loading image from database</p>:

allImage.map((soln)=>{
 
  const {imageUrl}=soln;


    return(

      
    

     <div className="card " style={{width: '14rem' ,marginBottom:'0.8rem',float:'left' ,marginRight:'0.4rem' ,borderBottom:'1rem solid orange',borderRadius:'0.9rem'}}>
  {/* <img src="..." class="card-img-top" alt="..."> */}
  
  
  <img className="img-fluid" src={imageUrl}
      
      style={{height:'14rem', width:'15rem'}}
     />

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>


     

    
    
    )
})
}</div></div></div><p style={{color:'red'}}>[images are fetched from database]</p></center> 

<Link to="/BookRide" style={{color:"orange"}}><center> <div  className="container" style={{color:'white',backgroundColor:"orange",margin:'0.5rem',width:"14rem",borderRadius:'0.5rem'}}><b>Go Back</b></div></center></Link>
<Link to="/Home" style={{color:"orange"}}><center> <div  className="container" style={{color:'white',backgroundColor:"orange",margin:'0.5rem',width:"14rem",borderRadius:'0.5rem'}}><b>Go To Home</b></div></center></Link>

    </div></center>
  )
}
