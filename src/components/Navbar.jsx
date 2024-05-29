import React, { useState } from 'react'
import './CSS/Navbar.css'
import pic from '../assets/icon.png'
import menu from '../assets/list.png'
import cross from '../assets/cross.png'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const openMenu = () => {
        const menu = document.getElementById("mobileNav");
        if (show === false) {
            // menu.style.display='flex';
            mobileNav.classList.add('show');
        }
        else {
            // menu.style.display='none';
            mobileNav.classList.remove('show');
        }
        setShow(!show);
    }
    return (
        <>
            <nav>
                <div>
                    <img src={pic} alt="logo" />
                </div>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#1"><li>Web-Projects</li></a>
                    <a href="#2"><li>Skills</li></a>
                    <a href="#3"><li>Android-Projects</li></a>
                    <a href="#4"><li>Journey</li></a>
                    <a href="#contact"><li>ContactUs</li></a>

                </ul>
                <button onClick={openMenu} id='menu'>
                    <img style={{ borderRadius: "0px" }} src={show?cross:menu} alt="" />
                </button>
            </nav>
            <div id='mobileNav'>
                <ul>
                <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>

                    <a onClick={openMenu} href="#"><li>Home</li></a>
                    <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>
                    <a onClick={openMenu} href="#1"><li>Web-Projects</li></a>
                    <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>

                    <a onClick={openMenu} href="#2"><li>Skills</li></a>
                    <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>

                    <a onClick={openMenu} href="#3"><li>Android-Projects</li></a>
                    <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>

                    <a onClick={openMenu} href="#4"><li>Journey</li></a>
                    <div style={{height:'1px',width:'100vw',backgroundColor:'gray'}}></div>

                    <a onClick={openMenu} href="#contact"><li>ContactUs</li></a>

                </ul>
            </div>
        </>
    )
}

export default Navbar