import React from 'react'
import Footer from './Footer'
export default function Feedback() {
  return (
<div className='container' >
      
      
<center><div class="form-container">
    <div class="form">
        <span class="heading">Give Feedback</span>
        <input placeholder="Name" type="text" class="input"/>
        <input placeholder="Email" id="mail" type="email" class="input"/>
        <textarea placeholder="write feedback" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
        <div class="button-container">
        <div class="send-button">Send</div>
        <div class="reset-button-container">
            <div id="reset-btn" class="reset-button">Reset</div>
        </div>
    </div>
</div>
</div></center>

    </div>

  )
}
