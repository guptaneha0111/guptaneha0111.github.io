import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Gototop from "../topscroller/Gototop"

const Footer = () => {
    return (
        <>
        <footer id='footer'>
            <a href="#header" className='footer__logo'>Neha Kumari</a>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/sdeneha/" target="_blank" rel="noreferrer"> <FaLinkedinIn /></a>
                <a href="https://github.com/guptaneha0111" target="_blank" rel="noreferrer" > <FaGithub /> </a>
            </div>
            <div className="footer__copyright">
                <small>Designed amd developed by Neha Kumari, @2023</small>
            </div>
            
        </footer>
        <Gototop/>
        </>
        
    )
}

export default Footer