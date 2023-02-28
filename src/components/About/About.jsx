import React from "react";
import "./About.css";
import  portfoliopersonalimg  from "../../../src/resource/Personal/portfolio_img.jpg";

export default function About() {
  return (
    <div className="about-sec" id="about">
      <div className="main-about">

          <div className="about-1">
              <img className="about-img" src={portfoliopersonalimg} alt="" />
          </div >

          <div className="about-2">
            {/* <h2 className="me">About Me</h2> */}
              <h1>
                I am a Full-stack web developer from India. Self motivated and
                curious with a keen interest in building user friendly products. My
                field of interests are building new web technologies, products and
                also in areas related to deep learning. I love to create beautiful
                and efficient websites for users. I keenly apply my knowledge for
                developing products with node.js, modern Javascript Library,
                mongoDB, express and frameworks like react.js
                {/* A self-motivated , hardworking and ambitious web
developer with profidency in java , html, css, react, node.js, mongoDB, express,
problem solving mindset and the ability to perform
well in collaboration . */}
              </h1>
          </div>

        </div>
    </div>
   
  );
}