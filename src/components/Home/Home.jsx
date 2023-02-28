
import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
import "./Home.css";
import  portfoliopersonalimg  from "../../../src/resource/Personal/portfolio_img.jpg";
// import { useColorMode } from '@chakra-ui/react';

const Home=()=>{
  // const { ColorMode, toggleColorMode} = useColorMode();
  // const isDark = ColorMode === "dark";
  return (

    <div id="home">
      <div className="name">
        <h1 className='text-color f7 hiwalah1'>Hi,<span>👋</span>I am</h1>
		    <h1 className='text-color f7 nameh123'>Neha Kumari</h1>
          <h1 className='typewriterh1'>
              <Typewriter
                className='auto-type'
                options={{
                  strings: [
                      "A Full Stack Web Developer."
                     ],
                   autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                }}
              />
          </h1>
        <a
          href="https://drive.google.com/uc?export=download&id=1DfsiTH5NY2Shw0Uan6_0D6WdihV3a0AP" download onClick={()=>window.open('https://drive.google.com/file/d/1DfsiTH5NY2Shw0Uan6_0D6WdihV3a0AP/view?usp=sharing')}
         >
          <button className='portButton' style={{"border-radius": "10px"}}>Download Resume<BiDownload className="download"/></button>
        </a>
      </div>
      <div>
        
        <img src={portfoliopersonalimg} alt="neha"  className='personalimg' />
       
      </div>
    </div>
  );
}
export default Home;