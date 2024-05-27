import React, { useState } from 'react'
import './CSS/Navbar.css'
import pic from '../assets/picLogo.jpeg'
import menu from '../assets/list.png'

const Navbar = () => {
    const [show,setShow]=useState(false);

    const openMenu=()=>{
        const menu=document.getElementById("mobileNav");
        if(show===false){
            // menu.style.display='flex';
            mobileNav.classList.add('show');
        }
        else{
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
                <a href=""><li>Home</li></a>
                <a href=""><li>Projects</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
                <a target='_blank' href="https://drive.google.com/file/d/1JMJVgM_xipcHNeuNUmOrRPqYrCvE0o7-/view?usp=sharing"><li>Resume</li></a>

            </ul>
            <button onClick={openMenu} id='menu'>
                <img style={{borderRadius:"0px"}} src={menu} alt="" />
            </button>
        </nav>
        <div id='mobileNav'>
                <ul>
                <a href=""><li>Home</li></a>
                <a href=""><li>Projects</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Contact</li></a>
                <a target='_blank' href="https://drive.google.com/file/d/1JMJVgM_xipcHNeuNUmOrRPqYrCvE0o7-/view?usp=sharing"><li>Resume</li></a>

            </ul>
        </div>
        </>
    )
}

export default Navbar