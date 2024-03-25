import React, { useRef } from 'react';
import './contact.css';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser'


function Contact() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0yiiybj', 'template_em94wsa', form.current, {
          publicKey: '_OdfjZx5D6mCBgZ1h',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <section id='contactPage'>
          <div id='contact'>
              <h1 id='contactTitle'>Contact Me</h1>
              <span className='contactDes'>
                  Please fill out the form below to discuss any work opportunities
              </span>
              <form className='contactForm' ref={form} onSubmit={sendEmail}>
                  <input type='text' name='user_name' placeholder='Your Name' className='name'/>
                  <input type='email' name='user_email' placeholder='Your E-mail Id' className='email'/>
                  <textarea type='textarea' placeholder='Your Message' rows={5} name='message' className='msg'/>
                  <button className='submitBtn' type='submit' value='send'>Submit</button>
                  <div className='links'>
                      <a href='https://www.facebook.com/princekhushal481/'><img src={facebook} alt='Facebook' className='link'/></a>
                      <a href='https://www.instagram.com/_khush1613_/'><img src={instagram} alt='Instagram' className='link'/></a>
                      <a href='https://www.linkedin.com/in/khushal-a74449272/'><img src={linkedin} alt='LinkedIn' className='link'/></a>
                  </div>
              </form>
          </div>
      </section>
    );
  }
  
  export default Contact;
  