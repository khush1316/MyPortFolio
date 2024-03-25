import React from 'react';
import './portfolio.css';
import ecommerce from '../../assets/e-commerce.png';
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'

function portfolio() {
  return (
    <section id='works'>
        <h2 className='workTitle'>PortFolio</h2>
        <span className='workDes'>Explore my portfolio and witness the fusion of creativity, technology, and innovation, as design transforms visions into reality, one pixel at a time.</span>
        <div className='workImgs'>
            <img src={ecommerce} alt='' className='workImg'/>
            <img src={portfolio1} alt='' className='workImg'/>
            <img src={portfolio2} alt='' className='workImg'/>
            <img src={portfolio3} alt='' className='workImg'/>
            </div>
    </section>
  )
}

export default portfolio;