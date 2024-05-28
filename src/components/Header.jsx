import React from 'react'
import './CSS/Header.css'
import pic from '../assets/picLogo.jpeg'
import code from '../assets/coding.png'
const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img src={pic} alt="logo" />
            </div>
            <div id='headline'>
                <div>
                    <p style={{ color: '#00B5FF' }}>Hello, welcome</p>
                    <h1>I m Jayant Sharma</h1>
                    <p id='desc'>I'm a full-stack developer with expertise in both Android and web development. I create seamless user experiences and build robust, scalable applications from the ground up. Let's turn ideas into innovative digital solutions.</p>
                    <a target='_blank' href="https://drive.google.com/file/d/1JMJVgM_xipcHNeuNUmOrRPqYrCvE0o7-/view?usp=sharing">View Resume</a>

                    <div id='socialLogoBox'>
                        <a target='_blank' href="https://www.linkedin.com/in/jayant-sharma-9544a4242/">
                            <div id='socialLogo'>
                                <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="linkedln" />
                            </div>
                        </a>

                        <a target='_blank' href="https://github.com/JayantSharma17">
                            <div id='socialLogo'>
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="linkedln" />
                            </div>
                        </a>

                        <a target='_blank' href="https://leetcode.com/u/JayantSharma17/">
                            <div id='socialLogo'>
                                <img src={code} alt="linkedln" />
                            </div>
                        </a>
                        <a target='_blank' href="#">
                            <div id='socialLogo'>
                                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="linkedln" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header