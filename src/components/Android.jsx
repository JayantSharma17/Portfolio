import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CSS/Crousel.css'
import brijteerth from '../assets/brijteerth.png'
import vidyasaathi from '../assets/vidyasaathi.png'
import mausam from '../assets/mausam.png'
import eventmingle from '../assets/eventmingle.png'
import gemini from '../assets/gemini.png'


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Android = () => {
    return (
        <>
            <div id='android'></div>
            <div id='WebC'>
                <h1>Android Creations</h1>
                <div >
                    <Carousel swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2200}
                        keyBoardControl={true}
                        arrows={false}

                    >
                        <div className='WebCards'>
                            <img src={brijteerth} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={vidyasaathi} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={mausam} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={eventmingle} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={gemini} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Android