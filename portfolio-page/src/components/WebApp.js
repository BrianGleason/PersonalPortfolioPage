import Navbar from './Navbar';
import AboutMe from './AboutMe';
import ItemSelector from "./ItemSelector";
import ResumeContainer from './ResumeContainer';
import ParticlesBg from 'particles-bg';
import {
  LIGHT_ORANGE,
  ORANGE,
  RED,
  EXPERIENCE_TITLE,
  EXPERIENCE_DATA,
  PROJECTS_TITLE,
  PROJECTS_DATA
} from '../utilities/Constants'
import { useRef } from 'react';
import { SocialIcon } from 'react-social-icons';


function WebApp({height}) {

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
  const screenheight = height;

  return (
    <div>
      <ParticlesBg type="cobweb" bg={{zIndex: -1,width: "100%", height: "600%", position: "absolute"}} num={300}/>
      <Navbar goToAbout={goToAbout} goToExperience={goToExperience} goToProjects={goToProjects} goToResume={goToResume}/>
    
      
      <div className="scroll-btn-container" style={{top: `${(height) * .9}px`}}>
          <div className="arrow" onClick={goToExperience} ></div>
      </div> 

      <div style={{display: "grid", gridTemplateColumns: "50% 50%", height: `${height - 96}px`}} ref={aboutSection}>
          <AboutMe/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "2rem", gap: "1rem"}}>
              <SocialIcon url="https://linkedin.com/in/brian-gleason1" bgColor='#ffffff' style={{height: "3.75rem", width: "3.75rem"}}></SocialIcon>
              <SocialIcon url="https://github.com/BrianGleason" bgColor='#ffffff' style={{height: "3.75rem", width: "3.75rem"}}></SocialIcon>
              <SocialIcon url="mailto:briangleason2023@u.northwestern.edu" bgColor='#ffffff' network="email" style={{height: "3.75rem", width: "3.75rem"}}></SocialIcon>
          </div>
      </div>  

      <div style={{display: "flex", height: `${screenheight}px`}} ref={experienceSection}>
          <ItemSelector style={{minWidth: "60%"}} input={EXPERIENCE_DATA} title={EXPERIENCE_TITLE} color={LIGHT_ORANGE}/>
      </div>
      
      <div className="scroll-btn-container" style={{top: `${height + (height * .9)}px`}}>
          <div className="arrow" onClick={goToProjects} ></div>
      </div> 

      <div style={{display: "flex", height: `${screenheight}px`}} ref={projectsSection}>
          <ItemSelector style={{minWidth: "60%"}} input={PROJECTS_DATA} title={PROJECTS_TITLE} color={ORANGE}/>
      </div>

      <div className="scroll-btn-container" style={{top: `${height * 2 + (height * .9)}px`}}>
          <div className="arrow" onClick={goToResume} ></div>
      </div> 
      <div style={{display: "flex", justifyContent: "center", height: `${screenheight}px`}} ref={resumeSection}>
          <ResumeContainer color={RED}/>
      </div>
    </div>
  );
}

export default WebApp;