import React, { useState } from 'react'
import './CSS/Contact.css'
import mail from '../assets/email.png'
import { Comment } from 'react-loader-spinner'



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ph, setPh] = useState('');
  const [msg, setMsg] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const handleSendMail = async () => {
    try {
      if (!name || !email || !ph || !msg) {
        alert('All fields are required.')
        return
      }
      setShowLoader(true);
      console.log(name, email, ph, msg);
      const payload = {
        name: name,
        email: email,
        ph: ph,
        msg: msg
      };

      const response = await fetch('https://skillnmernbackend.onrender.com/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        // setResponseMessage(data.message || 'Message sent successfully');
        alert('Your message is sent successfully.')
        setName(''); 
        setEmail(''); 
        setPh(''); 
        setMsg('');

      } else {
        // const errorData = await response.json();
        // alert(errorData.message);
        alert('Something went wrong, Please try after sometime.')


      }
      setShowLoader(false)
      return;
    }
    catch (e) {
      alert('Something went wrong, Please try after sometime.')
      console.log(e)
      setShowLoader(false)
    }
  }
  return (
    <>
      <div id='contact'>
        
        <h1>Let's work together!</h1>
        <div>
          <input type="text" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
          <input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <input type="text" placeholder='Phone Number' value={ph} onChange={(e) => { setPh(e.target.value) }} />
          <input type='text' placeholder='Message' value={msg} onChange={(e) => { setMsg(e.target.value) }} />
          {showLoader?<Comment
          visible={showLoader}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#00B5FF"
        />:<button onClick={handleSendMail}>Send message</button>}

        </div>

      </div>
      <div id='footer'>
        <img src={mail} alt="" />
        <p>mejayantsh@gmail.com</p>
      </div>

      
    </>
  )
}

export default Contact