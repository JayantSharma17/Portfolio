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
                            <h2>BrijTeerth App</h2>
                            <p> Android App for Mathura Parishad</p>
                            <a target='_blank' href="https://play.google.com/store/apps/details?id=com.inverosoft.govardhan.parikrama"><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={vidyasaathi} alt="" />
                            <h2>VidyaSaathi App</h2>
                            <p>Student Dropout Analysis App</p>
                            <a href="#"><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={mausam} alt="" />
                            <h2>Mausam App</h2>
                            <p>Mausam App for weather</p>
                            <a href="#"><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={eventmingle} alt="" />
                            <h2>EventMingle App</h2>
                            <p>Manage all your Events</p>
                            <a href="#"><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={gemini} alt="" />

                            <h2>Talk with AI</h2>
            <div id='4'></div>

                            <p>Natural one-on-one conversations with AI</p>

                            <a target='_blank' href="https://www.linkedin.com/posts/jayant-sharma-9544a4242_ai-gemini-google-activity-7184485687826558977-72Gw?utm_source=share&utm_medium=member_desktop"><h4>Project Link</h4></a>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Android