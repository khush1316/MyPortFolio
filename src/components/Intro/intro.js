import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

function intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'>Khushal</span></span>
            <span className='designation'>Web Developer</span>
            <p className='introPara'>
            Explore my portfolio for visually stunning, user-friendly websites. <br/>Let's collaborate to craft engaging online experiences.<br/> Creativity meets functionality here!
            </p>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default intro;