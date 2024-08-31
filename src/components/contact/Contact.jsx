import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const email= "mohitgeryani@gmail.com";
  const myUsername= "mohit_geryan";
 const contact = '+918504981925';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('service_lzihfjo', 'template_8jfxo0n',form.current, {
        publicKey: 'WcHC1SDfy14ObZZEx',
      })
      .then(
        () => {
          setSuccess(true);
          setTimeout(()=> {
            setSuccess(false);
         }, 2000);
          console.log('SUCCESS!');
          setLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          setError(true);
          setTimeout(()=> {
            setError(false);
         }, 2000);
        },
      );
      e.target.reset();
  };


  return (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
      <MdOutlineEmail  className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>{email}</h5>
          <a href={`mailto:${email}`} target='_blank'>Send a Message</a>
        </article>
        <article className="contact_option">
      <AiOutlineMessage className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>{myUsername}</h5>
          <a href={`https://ig.me/m/${myUsername}`} target='_blank'>Send a Message</a>
        </article>
        <article className="contact_option">
      <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>Chat on WhatsApp</h5>
          <a href={`https://wa.me/${contact}`} target='_blank'>Send a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button disabled={loading} type='submit' className='btn btn-primary'>{loading ? 'Sending...' : "Send a Message"}</button>
        
        <p style={{color:'#4db5ff'}}>{success  ? 'Message Sent Successfully!' : ''}</p>
        <p style={{color:'red'}}>{error  ? 'Something went Wrong, try again' : ''}</p>
      </form>

    </div>
  </section>
  )
}

export default Contact