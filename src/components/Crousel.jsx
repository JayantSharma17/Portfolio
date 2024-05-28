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
                            <p>A portfolio site built with React.js</p>
                            <a target="_blank" href="#"><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={skillnexus} alt="" />
                            <h2>SkillNexus</h2>
                            <p>An artist-focused platform</p>
                            <a target="_blank" href="https://skill-nexus.netlify.app"><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={furniture} alt="" />
                            <h2>Furniture-Site Replica</h2>
                            <p>UI created for Internship</p>
                            <a target='_blank' href="https://furniture-web-my.netlify.app/"><h4>Project Link</h4></a>
                        </div>
                        <div className='WebCards'>
                            <img src={spotifyClone} alt="" />
                            <h2>Spotify-Clone</h2>
                            <p>Spotify Clone using HTML and CSS</p>
                            <a target='_blank' href="https://jayantsharma17.github.io/Spotify-Clone/"><h4>Project Link</h4></a>
                        </div>

                        <div className='WebCards'>
                            <img src={coffee} alt="" />
                            <h2>Coffee House UI</h2>
                            <p>Frontend for a Cafe Website</p>
                            <a target='_blank' href="https://jayantsharma17.github.io/Coffee-House-Website/"><h4>Project Link</h4></a>
                        </div>


                        <div className='WebCards'>
                            <img src={gitAlong} alt="" />
                            <h2>Git-Along</h2>
                            <p>GitHub analytics dashboard developed using the MERN</p>
                            <a target='_blank' href="https://github.com/JayantSharma17/Git-Along"><h4>Project Link</h4></a>
                        </div>




                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Crousel