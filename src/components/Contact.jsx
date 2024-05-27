import React from 'react'
import './CSS/Contact.css'


const Contact = () => {
  return (
    <>
        <div id='contact'>
        <h1>Let's work together!</h1>
        <div>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Phone Number'/>
            <input type='text' placeholder='Message'/>
        <button>Send message</button>

        </div>
        
    </div>
    <div id='footer'>
            <p>mejayantsh@gmail.com</p>
        </div>
    </>
  )
}

export default Contact