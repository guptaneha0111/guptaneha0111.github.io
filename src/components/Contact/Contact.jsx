import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1 className="con-head">Contact Me</h1>
          <div className="middlesection">
          <div>
              <LinkedInIcon className="iconlinkedincontact" />
              <h1>LinkedIn</h1>
              <p>You can contact me on LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/sdeneha/"
                rel="noreferrer"
                target="_blank"
              >
                <p>Neha Kumari</p>
              </a>
            </div>
            <div>
              <PhoneIcon className="iconlinkedincontact" />
              <h1>Phone</h1>
              <p>My Phone Number</p>
              <a href="tel:+919097253578" rel="noreferrer" target="_blank">
                <p>+91-9097253578</p>
              </a>
            </div>
            <div>
              <GitHubIcon className="iconlinkedincontact" />
              <h1>Github</h1>
              <p>My Github Id</p>
              <a
                href="https://github.com/guptaneha0111"
                rel="noreferrer"
                target="_blank"
              >
                <p>guptaneha0111</p>
              </a>
            </div>
            <div>
              <EmailIcon className="iconlinkedincontact" />
              <h1>Email</h1>
              <p>Drop me a mail just by clicking on my email</p>
              <a
                href="mailto:rajneha0111@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <p>rajneha0111@gmail.com</p>
              </a>
            </div>

          
         

          </div>
        </div>
      </div>
      
    </>
  );
}

