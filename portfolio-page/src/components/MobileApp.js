import MobileNavbar from './MobileNavbar';
import MobileAboutMe from './MobileAboutMe';
import MobileItemSelector from "./MobileItemSelector";
import MobileResumeContainer from './MobileResumeContainer';
import ParticlesBg from 'particles-bg';
import {
  LIGHT_ORANGE,
  ORANGE,
  RED,
  EXPERIENCE_TITLE,
  EXPERIENCE_DATA,
  PROJECTS_TITLE,
  MOBILE_PROJECTS_DATA
} from '../utilities/Constants'
import { useRef } from 'react';
import { SocialIcon } from 'react-social-icons';


function MobileApp({height}) {

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
        top: experienceSection?.current?.offsetTop - window.innerHeight * .15 || 0,
        behavior: 'smooth',
  })};
  const goToProjects = () =>{
    window.scrollTo({
        top: projectsSection?.current?.offsetTop - window.innerHeight * .15 || 0,
        behavior: 'smooth',
  })};
  const goToResume = () => {
    window.scrollTo({
        top: resumeSection?.current?.offsetTop - window.innerHeight * .15 || 0,
        behavior: 'smooth', 
  })};
  const screenheight = height;

  return (
    <div>
      <ParticlesBg type="cobweb" bg={{zIndex: -1,width: "100%", height: "400%", position: "absolute"}} num={150}/>
      <MobileNavbar goToAbout={goToAbout} goToExperience={goToExperience} goToProjects={goToProjects} goToResume={goToResume}/>

      <div style={{display: "flex", height: `100vh`}} ref={aboutSection}>
          <MobileAboutMe/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", margin: "3vw", gap: "2vw", flexGrow: "1"}}>
              <SocialIcon url="https://linkedin.com/in/brian-gleason1" bgColor='#ffffff' style={{height: "10vw", width: "10vw"}}></SocialIcon>
              <SocialIcon url="https://github.com/BrianGleason" bgColor='#ffffff' style={{height: "10vw", width: "10vw"}}></SocialIcon>
              <SocialIcon url="mailto:briangleason2023@u.northwestern.edu" bgColor='#ffffff' network="email" style={{height: "10vw", width: "10vw"}}></SocialIcon>
          </div>
      </div>  

      <div style={{display: "flex", height: `100vh`, justifyContent: "center"}} ref={experienceSection}>
          <MobileItemSelector input={EXPERIENCE_DATA} title={EXPERIENCE_TITLE} color={LIGHT_ORANGE}/>
      </div>

      <div style={{display: "flex", height: `100vh`, justifyContent: "center"}} ref={projectsSection}>
          <MobileItemSelector style={{minWidth: "60%"}} input={MOBILE_PROJECTS_DATA} title={PROJECTS_TITLE} color={ORANGE}/>
      </div>

      <div style={{display: "flex", justifyContent: "center", height: `100vh`}} ref={resumeSection}>
          <MobileResumeContainer color={RED}/>
      </div>
    </div>
  );
}

export default MobileApp;