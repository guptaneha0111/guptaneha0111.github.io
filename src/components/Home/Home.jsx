
import Typewriter from 'typewriter-effect'
import React from "react";
import {BiDownload} from 'react-icons/bi'
import "./Home.css";
import  portfoliopersonalimg  from "../../../src/resource/Personal/portperimg.jpg";
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
          href="https://drive.google.com/uc?export=download&id=1EgF48O95bq3SSJ2qJ6lNlTQ6wB94AGvS"
          target="_blank" 
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