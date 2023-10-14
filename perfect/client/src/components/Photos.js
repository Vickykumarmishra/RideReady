import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookRide from './BookRide';
import Swal from 'sweetalert2';
import axios from 'axios';
export default function Photos() {
    const [allImage, setAllImage] = useState(null); 


    useEffect(()=>{
        getImage();
        loader();
    },[])
    const getImage = async () => {
      axios.get("https://perfectrider.onrender.com/get-image")
      .then(response => {
     
        setAllImage(response.data);
      
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

      };
    
      function loader(){

        let timerInterval
        Swal.fire({
          title: '....Loading!',
          html: 'I will close in <b></b> milliseconds.',
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        }
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

      
    

     <div className="card " style={{width: '14.5rem' ,marginBottom:'0.8rem',float:'left' ,marginRight:'0.4rem' ,borderBottom:'1rem solid orange',borderRadius:'0.9rem'}}>
  {/* <img src="..." class="card-img-top" alt="..."> */}
  
  
  <img className="img-fluid" src={imageUrl}
      
      style={{height:'14rem', width:'15rem',borderRadius:'0.2rem'}}
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
