import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
export default function Showimage() {

    const [image,setImage]=useState(null)  
  
  
    const submitImage = async (e) => {
      e.preventDefault();
   var x= document.getElementById("inputGroupFile04").value;

      /*const formData = new FormData();: Here, a new instance of the FormData object is created.FormData is a built-in
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
      const formData = new FormData();
      formData.append("image", image);
  
      const result = await axios.post(
        "http://localhost:8000/upload-image",

        
      
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    
      Swal.fire(
        'saved',
        'image successfully saved to database!',
        'success'
      )}
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
    <div className='container text-center'>




<form onSubmit={submitImage} className='container'>
<div className="input-group" style={{marginBottom:'0.5rem'}}>
        <input type="file" accept="image/*" onChange={onInputChange} className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" name="photo"></input>
         {/*accept="image/*" indicates that the input should accept all types of image files. */}
        <button class="btn btn-outline-secondary"  style={{backgroundColor:"orange",color:"white"}} type="submit"><b>upload</b></button>  </div>
      </form>
    


      
     
   
    </div>
  )
}
