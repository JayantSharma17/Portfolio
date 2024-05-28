import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CSS/Crousel.css'
import portfolioSite from '../assets/portfolioSite.png'
import skillnexus from '../assets/skillnexus.png'
import furniture from '../assets/furniture.png'
import spotifyClone from '../assets/spotifyClone.png'
import coffee from '../assets/coffee.png'
import gitAlong from '../assets/gitAlong.png'


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
const Crousel = () => {

    return (
        <>
            <div id='WebC'>
                <h1>Web Creations</h1>
                <div style={{zIndex:10}}>
                    <Carousel style={{zIndex:10}} 
                        swipeable={true}
                        draggable={true}
                        //   showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2200}
                        keyBoardControl={true}
                        arrows={false}
                    //   customTransition="all .5"
                    >
                        <div className='WebCards'>
                            <img src={portfolioSite} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={skillnexus} alt="" />
                            <h2>SkillNexus</h2>
                            <p>Lorem ipsum dolor sit amet </p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={furniture} alt="" />
                            <h2>Portfolio-Site</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={spotifyClone} alt="" />
                            <h2>Spotify-Clone</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={coffee} alt="" />
                            <h2>Spotify-Clone</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>


                        <div className='WebCards'>
                            <img src={gitAlong} alt="" />
                            <h2>Spotify-Clone</h2>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                            <a href=""><h4>Project Link</h4></a>
                        </div>




                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Crousel