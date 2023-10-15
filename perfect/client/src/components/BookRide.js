import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Footer from './Footer';
import Showimage from './Showimage';
import Swal from 'sweetalert2';
import Photos from './Photos';
export default function BookRide() {
  const [info, setInfo] = useState([]);
 
  useEffect(() => {

   
    axios.get("https://perfectrider.onrender.com/getter")
      .then(response => {
       // console.log(response.data);
        setInfo(response.data);
        loaded();
        
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  function loaded(){
    Swal.fire(
      'data loaded',
      'Data accessed from database',
      'success'
    )
  }

//  function deleter(id){
//    console.log(id)

//     fetch(`http://localhost:8000/delete/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({}) // You can pass data as the request body if needed
//     }).then(()=>{console.log('data deleted succesfully')})
//   }

function deleter(id) {
  console.log(id); // Corrected from console.log({id})

  fetch(`https://perfectrider.onrender.com/delete/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    // You can pass data as the request body if needed, for example:
    // body: JSON.stringify({ id: id })
  })
    .then((response) => {
      if (response.ok) {
        console.log('Data deleted successfully');
      } else {
        console.error('Failed to delete data');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    Swal.fire(
      'Deleted  successfully from database',
      'Refresh the page to see the effect',
      'success'
    )  
}

function loader(){

let timerInterval
Swal.fire({
  title: '......Loading',
  html: 'I will close in <b></b> milliseconds.',
  timer: 100000,
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

useEffect(()=>{

  loader();
},[])

  return (
  
       
   <div  className='container'  >
    {/* {loaded==false?:toast("loggedInn",{ toastId: 'success11'})} */}
    <h1 style={{ fontFamily: 'cursive'}} ><b>Available Bikes Details</b></h1>
      
      {/* Display the accessed data */}
   


     


<div className='overflow-x-auto ' >
  
  
<table className="table  table-hover table-success table-bordered  caption-top"  >
    <caption style={{color:'red'}}>[Refresh if data not loaded]</caption>
       <thead style={{border:"0.1rem solid black",backgroundColor:"#416a59", color:"#416a59"}}><tr>
          <th> <img src='name icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/>Biker's Name</th>
           <th><img src='phone icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/>phone</th> 
          <th> <img src='address icon.png' style={{height:"1.2rem",width:'2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/> pickup point</th>
           <th> <img src='money icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/> Amount</th>
          <th><img src='time icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/>Time</th> 
          <th>Delete</th>
  
          {/* <th>image</th> */}
          </tr></thead>
          <tbody style={{border:"0.1rem solid black", scale:'1.0'}}>
           {
             info.map((soln)=>{
              
              const {_id,name,phone,pickup,charge,time}=soln;

         
              
                  return(
                  
          
                 <tr>
                  <td >{name}</td>
                  <td  >{phone}</td>
                  <td>{pickup}</td>
                  <td >{charge}</td>
                  <td >{time}</td>
                 <button className='btn btn-danger' onClick={()=>{deleter(_id)}} style={{backgroundColor:'orange',margin:'0.2rem'}}><b>Delete</b></button>
                  {/* <td>{image}</td> */}
                 
                 </tr>
               
                     
                 
               
                    
                  )
            })
            
          }
          </tbody>
          </table></div>
<Link to="/Photos" style={{color:"orange"}}><center> <div  className="container  " style={{color:'white',backgroundColor:"orange",margin:'0.5rem',width:"20rem",borderRadius:'0.5rem',border:"0.1rem solid red"}}><b>View images of  bikes</b></div></center></Link>
<Link to="/Home" style={{color:"orange"}}><center> <div  className="container" style={{color:'white',backgroundColor:"orange",margin:'0.5rem',width:"20rem",borderRadius:'0.5rem',border:"0.1rem solid red"}}><img src='home icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/><b>Go To Home</b></div></center></Link>

        
          </div>



  

  );
}
