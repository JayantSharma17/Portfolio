import React, { useEffect } from 'react'
import './CSS/Journey.css'

const Journey = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('square-animation');
                    observer.unobserve(entry.target); 
                }
            });
        });
        const elements = document.querySelectorAll('.journeyC');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('line-animation');
                    observer.unobserve(entry.target); 
                }
            });
        });
        const elements = document.querySelectorAll('.line');
        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return (
        <div id='journey'>
            <h1>My Journey and Experiences</h1>

            <div className='line'></div>
            <div className='journeyC'>
                <div>
                    <div><h1>
                        Gyan Deep Shiksha Bharati, Mathura
                    </h1>
                        <p>May 2019</p></div>
                    <p className='tit'>High School</p>
                </div>
            </div>

            <div className='line'></div>
            <div className='dot'></div>
            <div className='line'></div>
            <div className='journeyC'>
                <div>
                    <div><h1>
                        Gyan Deep Shiksha Bharati, Mathura
                    </h1>
                        <p>May 2021</p></div>
                    <p className='tit'>Intermediate</p>
                </div>
            </div>

            <div className='line'></div>
            <div className='dot'></div>
            <div className='line'></div>
            <div className='journeyC'>
                <div>
                    <div><h1>
                    GLA University, Mathura
                    </h1>
                        <p>May 2021</p></div>
                    <p className='tit'>Bachelor of Engineering in Computer Science</p>
                </div>
            </div>

            <div className='line'></div>
            <div className='dot'></div>
            <div className='line'></div>
            <div className='journeyC'>
            <div>
                    <div><h1>
                    Internship at Inverosoft
                    </h1>
                        <p>June 2023</p></div>
                    <p className='tit'>Software Intern</p>
                    <p>Completed a 2-month internship at InveroSoft Software Solutions.</p>
                </div>
            </div>

        </div>
    )
}

export default Journey