import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import mytheresa from '../../../src/resource/Project/mytheresa.png';
import semrush from '../../../src/resource/Project/semrush.png'
import myglamm from '../../../src/resource/Project/myglamm.png'
import cronometer from '../../../src/resource/Project/cronometer.png'
import "./project.css";



export default function Project(props) {

  return (

    <div id="project" className="proj" >
      <h1 className="h14">My Projects</h1>
      <div className="projCont">
         <div className="final">
          <div className="img">
            <img src={mytheresa} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>Mytheresa Clone</h2>
            <p>
             It is one of the leading global luxury fashion e-commerce platforms for men, women and kids.
            </p>
            <h3 className='tech_stack_h3'>Tech Stack:-</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
              <div>
                
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://cool-travesseiro-df5a1a.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/guptaneha0111/damp-bite-3145"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

       

        <div className="final">
          <div className="img">
            <img src={semrush} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>Semrush clone</h2>
            <p>
            It is a clone of Semrush, the online visibility
             management and content marketing SaaS platform.
            </p>
            <h3 className='tech_stack_h3'>Tech Stack:-</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://semrush.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/isky27/spicy-yak-7891"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div> 

        <div className="final">
          <div className="img">
            <img src={myglamm} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>MyGlamm clone</h2>
            <p>
             It is an Indian e-commerce company that sells cosmetics and personal care products.
            </p>
            <h3 className='tech_stack_h3'>Tech Stack:-</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://incredible-basbousa-aecbd0.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/guptaneha0111/bewildered-head-3884"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div> 
        
        <div className="final">
          <div className="img">
            <img src={cronometer} alt="" />
          </div>
          <div>
            <h2 style={{fontSize:"20px"}}>Cronometer clone</h2>
            <p>
           It is a website and app for counting calories and tracking your diet and health metrics.
            </p>
            <h3 className='tech_stack_h3'>Tech Stack:-</h3>

            <div className="tech">
              <div>
               <AiFillHtml5 className="techfont"/>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="techfont"/>
                <p>CSS</p>
              </div>
              <div>
                <TbBrandJavascript className="techfont"/>
                <p>JavaScript</p>
               
              </div>
              <div>
                 <FaReact className='techfont'/> 
                 <p>React</p> 
              </div>
              
            </div>
            <div className="buttons">
              <a
                href="https://fitnessapp-blue.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/guptaneha0111/nonchalant-playground-1007"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}