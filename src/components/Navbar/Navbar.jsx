// import Link from "react-scroll/modules/components/Link";
import { Link, animateScroll } from "react-scroll";
import React from "react";
import Hamburger from  'hamburger-react';
import "./Navbar.css";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo-h1" style={{fontFamily:"cursive"}}>Nk</h1>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
        
      <Hamburger className="Hamburger"/>
        </label>
      </div>
      <ul className="nav-ul">
        <Link to="/"
              activeClass="active"
              onClick={() => animateScroll.scrollToTop()}
              spy={true}
              smooth={true}
              duration={1000}>
          <li>Home</li>
        </Link>
        <Link  to="about"
              offset={-90}

              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}>
          <li>About</li>
        </Link>
        <Link  to="skill"
              offset={-90}
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}>
          <li>Skills</li>
        </Link>
        <Link  to="project"
              offset={-50}
              smooth={true}
              duration={1500}
              spy={true}
              hashSpy={true}>
          <li>Projects</li>
        </Link>
        <Link to="contact"
              offset={-150}
              smooth={true}
              duration={1000}
              spy={true}
              hashSpy={true}>
          <li>Contact</li>
        </Link>
        
        <a
          // href="https://drive.google.com/file/d/1EgF48O95bq3SSJ2qJ6lNlTQ6wB94AGvS/view?usp=sharing"
          // target="_blank"
          // rel="noreferrer"
          
          href="https://drive.google.com/uc?export=download&id=1DfsiTH5NY2Shw0Uan6_0D6WdihV3a0AP" download onClick={()=>window.open('https://drive.google.com/file/d/1DfsiTH5NY2Shw0Uan6_0D6WdihV3a0AP/view?usp=sharing')}
          >
    {/* https://drive.google.com/file/d/1DfsiTH5NY2Shw0Uan6_0D6WdihV3a0AP/view?usp=sharing */}
          <li>Resume</li> 
         
          
        </a>
      
      </ul>
      
    </div>
    
  );
}