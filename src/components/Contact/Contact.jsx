import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';

import {AiFillGithub} from 'react-icons/ai'
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1 className="con-head">Contact Me</h1>
          <p>
            Drop me a mail at:- <strong> <a href="mailto:rajneha0111@gmail.com" className="mail-id">rajneha0111@gmail.com</a></strong>
          </p>
          
          <div className="links">
            <a
              href="https://github.com/guptaneha0111"
              target="_blank"
              rel="noreferrer"
            >
             
              <AiFillGithub className="fontlink"/>
            </a>
            <a
              href="https://www.linkedin.com/in/sdeneha/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="fontlink"/>
              
            </a>
           
          </div>

          
        </div>
      </div>
      
    </>
  );
}