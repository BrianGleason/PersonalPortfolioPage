import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ItemSelector from "./components/ItemSelector";
import {LIGHT_ORANGE, ORANGE, RED} from "./utilities/Constants"
import ResumeContainer from './components/ResumeContainer';
import ParticlesBg from 'particles-bg';
import {
  EXPERIENCE_TITLE,
  EXPERIENCE_DATA,
  PROJECTS_TITLE,
  PROJECTS_DATA
} from './utilities/Constants.js'
import { useRef } from 'react';
import { SocialIcon } from 'react-social-icons';


function App() {

  const aboutSection = useRef(null);
  const experienceSection = useRef(null);
  const projectsSection = useRef(null);
  const resumeSection = useRef(null);

  const goToAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  })};
  const goToExperience = () =>{
    window.scrollTo({
        top: experienceSection?.current?.offsetTop || 0,
        behavior: 'smooth',
  })};
  const goToProjects = () =>{
    window.scrollTo({
        top: projectsSection?.current?.offsetTop || 0,
        behavior: 'smooth',
  })};
  const goToResume = () => {
    window.scrollTo({
        top: resumeSection?.current?.offsetTop || 0,
        behavior: 'smooth', 
  })};
  const screenheight = window.screen.height;

  /*
  <SocialIcon url="https://linkedin.com/in/brian-gleason1" bgColor='#ffffff'></SocialIcon>
      <SocialIcon url="https://github.com/BrianGleason" bgColor='#ffffff'></SocialIcon>
      <SocialIcon url="mailto:briangleason2023@u.northwestern.edu" bgColor='#ffffff' network="email"></SocialIcon>
  */

  return (
    <div>
      <ParticlesBg type="cobweb" bg={{zIndex: -1,width: "100%", height: "600%", position: "absolute"}} num={300}/>
      <Navbar goToAbout={goToAbout} goToExperience={goToExperience} goToProjects={goToProjects} goToResume={goToResume}/>
    
      
      <div className="scroll-btn-container" style={{top: `${(window.screen.height) * .75}px`}}>
          <div class="arrow" onClick={goToExperience} ></div>
      </div> 

      <div style={{display: "grid", gridTemplateColumns: "50% 50%", height: `${window.screen.height - 96}px`}} ref={aboutSection}>
          <AboutMe/>
      </div>  

      <div style={{display: "flex", height: `${screenheight}px`}} ref={experienceSection}>
          <ItemSelector style={{minWidth: "60%"}} input={EXPERIENCE_DATA} title={EXPERIENCE_TITLE} color={LIGHT_ORANGE}/>
      </div>
      
      <div className="scroll-btn-container" style={{top: `${window.screen.height + (window.screen.height * .75)}px`}}>
          <div class="arrow" onClick={goToProjects} ></div>
      </div> 

      <div style={{display: "flex", minHeight: `${screenheight}px`}} ref={projectsSection}>
          <ItemSelector style={{minWidth: "60%"}} input={PROJECTS_DATA} title={PROJECTS_TITLE} color={ORANGE}/>
      </div>

      <div className="scroll-btn-container" style={{top: `${window.screen.height * 2 + (window.screen.height * .75)}px`}}>
          <div className="arrow" onClick={goToResume} ></div>
      </div> 
      <div style={{display: "flex", justifyContent: "center", minHeight: `${screenheight}px`}} ref={resumeSection}>
          <ResumeContainer color={RED}/>
      </div>
    </div>
  );
}

export default App;
