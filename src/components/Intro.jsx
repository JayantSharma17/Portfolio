import React from 'react'
import './CSS/Intro.css'
const Intro = () => {
    return (
        <>
            <div id='mainintroCardbox'>
            <div id='introCardbox'>
                <div className='introCard'>
                <img src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_web_development___chrome_logo_website_browser_google.png" alt="" />
                    <h2>Web-Development</h2>
                    <p>I build engaging websites with HTML, CSS, JavaScript, and React, ensuring they're fast, secure, and visually appealing.</p>
                </div>
                <div className='introCard'>
                <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-android-4387633-3640294.png" alt="" />
                    <h2>Android-Development</h2>
                    <p>I craft top-notch mobile apps with React Native, prioritizing intuitive design and smooth performance.</p>
                </div>
                <div className='introCard'>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/code-4059153-3364039@0.png?f=webp" alt="" />
                    <h2>Programming</h2>
                    <p>I tackle challenges head-on with Python and Java, focusing on efficient solutions and staying updated with the latest tech.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Intro