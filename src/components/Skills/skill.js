import React from 'react'
import './skill.css';
import C from '../../assets/C.png'
import CPP from '../../assets/Cpp.png'
import JAVA from '../../assets/java.png'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/js.png'

function skill() {
    return (
        <section className='skills'>
            <div className='about'>
                <p className='head'>Who I am</p>
                <p className='myself'>
                    I am an ambitious and hard-working person, looking
                    to kickstart my career in an esteemed organization
                    and incorporate my skills. I want to work for a
                    respectable company and use my abilities to
                    increase my level of experience. I'm looking forward
                    to working for a reputed company that will provide
                    me the chance to develop my skills.
                </p>
            </div>
            <div className='Skill'>Skills<hr/></div>
            
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={C} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>C</h2>
                        <p></p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={CPP} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>C++</h2>
                        <p></p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={JAVA} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Java</h2>
                        <p></p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={HTML} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>HTML</h2>
                        <p></p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={CSS} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>CSS</h2>
                        <p></p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={JS} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Javascript</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default skill;