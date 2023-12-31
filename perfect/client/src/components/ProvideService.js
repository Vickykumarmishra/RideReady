import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import  axios from "axios";
import { Link } from 'react-router-dom';
import Footer from './Footer';


import { useFormik } from 'formik'
import * as yup from "yup";
import { SchemaProvide } from '../schema/Index';
const initialValues={

  name:"",
  phone:"",
  pickup:"",
  charge:"",
  time:"",
  }
export default function ProvideService() {
  
 
 

 

  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [pickup,setPickup]=useState("");
  const [charge,setCharge]=useState("");
  const [time, setTime]=useState("");
  

  function handleClick(e){


    e.preventDefault();

   
   let names=document.getElementById("name").value;
   let phones=document.getElementById("phone").value;
   let pickups=document.getElementById("pickup").value;
   let charges=document.getElementById("charge").value;
   let timings=document.getElementById("time").value;

   const {name,phone,pickup,charge,time}=values;

    setName(names);
    setPhone(phones);
    setPickup(pickups);
    setCharge(charges);
    setTime(timings);

    
   
  
    const url="https://perfectrider.onrender.com/post"
   
     if(name!==''&&phone!==''&&pickup!==''&&charge!==''&&time!==''){

      fetch(url,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({name,phone,pickup,charge,time}),
      })
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });

     

      Swal.fire(
        'saved',
        'Your information saved to database!',
        'success'
      )

       
    }

   else{

  
    handleSubmit();
   }

   
  }


  const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:SchemaProvide,
    onSubmit:(values,action)=>{
     
      action.resetForm();
    }
    
    })

    const [image,setImage]=useState(null)  
  
  
    const submitImage = async (e) => {
      e.preventDefault();
   var x= document.getElementById("inputGroupFile04").value;

      /*const formData  = new FormData();: Here, a new instance of the FormData object is created.FormData is a built-in
  JavaScript object that is used to construct a set of key/value pairs representing form fields and their values, which can then be sent to the server.
  formData.append("image", image);: This line appends data to the formData object. It adds a field named "image" and associates it with the image variable. 
  image presumably contains the file that you want to upload. */

  if(x==''){

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Upload the image of your bike',
      
    })

  }

else{  
      
  let timerInterval
  Swal.fire({
    title: '....Uploading Image to database',
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
  
  const formData = new FormData();
  formData.append("image", image);
  
  try {
    const result = await axios.post(
      "https://perfectrider.onrender.com/upload",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    Swal.fire(
      'saved',
      'image successfully saved to database!',
      'success'
    );
  } catch (error) {
    // Handle the error here, you can log it or display an error message to the user
    console.error('An error occurred:', error);
    // You can also show an error message to the user, for example using Swal
    Swal.fire(
      'Error',
      'An error occurred while saving the image.',
      'error'
    );
  }

  
}
      
    };
   
    const onInputChange = (e) => {
      //koi v naya file upload karenge ,to vo ek input chnage event hoga and that will trigger this function.
      //console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    /*We'll also need to define a JavaScript function that gets triggered when a file is selected.
    This function typically uses the onChange event handler on the file input element.
    Inside this function, you can access the selected file using e.target.files[0],where e is the event object. */
    };
 
  return (
    <>
    <div className="container" style={{marginTop:"2rem"}}>
       <h1 style={{fontFamily:"cursive"}}><b>Service Provider's Details</b> </h1>
  <p style={{color:'darkorange'}}>[In below form bikers need to upload their bikes's images and all other details]</p>
       

       <form >
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="name" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">name:</label>
</div>


        {errors.name && touched.name?(<p  style={{color:'red'}}className='form-error'>{errors.name}</p>):null}

<div className="form-floating mb-3">
  <input type="text" className="form-control" id="phone" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
  <label for="floatingInput">Phone:</label>
</div>
{errors.phone && touched.phone?(<p  style={{color:'red'}}className='form-error'>{errors.phone}</p>):null}
<div className="form-floating mb-3">
  <input type="text" className="form-control" id="pickup" name='pickup' value={values.pickup} onChange={handleChange} onBlur={handleBlur}  />
  <label for="floatingInput">Pick up point:</label>
</div>
{errors.pickup && touched.pickup?(<p  style={{color:'red'}}className='form-error'>{errors.pickup}</p>):null}
<div className="row g-2">
  <div className="col-md">
    <div className="form-floating">
      <input type="text" className="form-control" id="charge"  name='charge' value={values.charge} onChange={handleChange} onBlur={handleBlur} />
      <label for="floatingInputGrid">Enter the Amount you will charge:</label>
    </div>
    {errors.charge && touched.charge?(<p  style={{color:'red'}}className='form-error'>{errors.charge}</p>):null}
  </div>
  <div className="col-md">
  <div className="form-floating">
      <input type="text" className="form-control" id="time" name='time'  value={values.time} onChange={handleChange} onBlur={handleBlur} />
      <label for="floatingInputGrid">Pick up Timing:</label>
    </div>
    {errors.time && touched.time?(<p  style={{color:'red'}}className='form-error'>{errors.time}</p>):null}
  </div>
</div>

        

 
      <div className='container' type='submit' style={{backgroundColor:"black",color:'white',marginTop:'0.5rem',marginBottom:"0.5rem"}} onClick={handleClick} ><b>Submit</b></div>
      </form>
      
    <center>
      
    <div className='container text-center'>




<form onSubmit={submitImage} className='container'>
<div className="input-group" style={{marginBottom:'0.5rem'}}>
        <input type="file" accept="image/*" enctype="multipart/form-data" onChange={onInputChange} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="image"></input>
         {/*accept="image/*" indicates that the input should accept all types of image files. */}
        <button class="btn btn-outline-secondary"  style={{backgroundColor:"orange",color:"white"}} type="submit" ><b>upload</b></button>  </div>
      </form>
    
    </div>
      </center>  
          <div>
             
          


          
          </div>
         <Link to="/Home" style={{color:"orange"}}> <div style={{color:'white',backgroundColor:"orange",marginBottom:'0.5rem',border:"0.1rem solid red"}}><center><img src='home icon.png' style={{height:"1.2rem",width:'1.2rem',marginRight:'0.5rem',marginBottom:'0.1rem'}}/><b>Home</b></center></div></Link>
       
    </div>
      <Footer/></>


  )
}


/*value={values.name}: Here, values.name is used to bind the value of the input field to a variable or state property called name within the values object. 
This means that the input field's value will be controlled by the value of values.name. If values.name changes, the input field's value will update accordingly. */