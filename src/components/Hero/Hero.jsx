import React from 'react'
import './Hero.css'
import Header from "../../Header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {type:'spring',duration:3}
    const mobile= window.innerWidth<=768?true:false;
    return (
        <div className="hero" id='home'>

            <div className="blur hero-blur"></div>
            <div className="left-h">

                <Header />
                {/* Best Ad */}
                <div className="the-best-ad">
                    <motion.div
                    initial={{left:mobile?"140px":'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}                   
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Text */}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>
                        Shape</span>
                        <span>Your</span>
                        </div>
                        
                        <div><span>
                            Ideal Body</span></div>
                    <div>
                        <span>
                            In Here we will help you to shape and build your ideal body and live up your life fullest
                        </span>
                    </div>
                </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>
                <NumberCounter end={140}
                start={100}
                delay='4'
                 preFix="+"/>


                    </span>
                    <span>EXPERT COACHES</span>
                </div>

                    <div>
                        <span>
                            <NumberCounter end={978}
                                start={800}
                                delay='4'
                                preFix="+" />
                        </span>
                        <span>MEMBERS JOINED</span>
                    </div>

                    <div>
                        <span><NumberCounter end={50}
                            start={0}
                            delay='2'
                            preFix="+" /></span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                   
            </div>

            {/* Hero Buttons */}

            <div className="hero-buttons">
                <buttons className="btn">
                    Get Started
                </buttons>
                <buttons className="btn">
                    Learn More
                </buttons>

            </div>


            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div 
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                
                className="heart-rate">
                    <img src={Heart}></img>
                    <span>
                        Heart Rate
                        </span>
                        
                        <span>116 bpm</span>
                </motion.div>

                {/* Hero Images */}
                <img src={hero_image} className="hero_image"></img>
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                
                src={hero_image_back}className="hero_image_back"/>
            {/* Calories */}

              <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}              
              className="calories">
                <img src={Calories}></img>
                <div>
                <span>
                    Calories Burned</span>
                    <span>
                        220 kcal
                    </span>
                    </div>
                </motion.div>  

            
            </div>
        </div>
    )
}

export default Hero;