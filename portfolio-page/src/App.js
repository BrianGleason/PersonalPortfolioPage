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


function App() {

  const aboutSection = useRef(null);
  const experienceSection = useRef(null);
  const projectsSection = useRef(null);
  const resumeSection = useRef(null);

  const goToAbout = () => {
    window.scrollTo({
        top: aboutSection?.current?.offsetTop || 0,
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

  return (
    <div>
      <ParticlesBg type="cobweb" bg={{zIndex: -1,width: "100%", height: "600%", position: "absolute"}} num={300}/>
      <Navbar goToAbout={goToAbout} goToExperience={goToExperience} goToProjects={goToProjects} goToResume={goToResume}/>

      <div style={{display: "grid", gridTemplateColumns: "50% 50%", minHeight: `${screenheight}px`}} ref={aboutSection}>
          <AboutMe/>
      </div>

      <div style={{display: "flex", minHeight: `${screenheight}px`}} ref={experienceSection}>
          <ItemSelector style={{minWidth: "60%"}} input={EXPERIENCE_DATA} title={EXPERIENCE_TITLE} color={LIGHT_ORANGE}/>
      </div>
      <div style={{display: "flex", minHeight: `${screenheight}px`}} ref={projectsSection}>
          <ItemSelector style={{minWidth: "60%"}} input={PROJECTS_DATA} title={PROJECTS_TITLE} color={ORANGE}/>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", minHeight: `${screenheight}px`}} ref={resumeSection}>
          <ResumeContainer color={RED}/>
      </div>
    </div>
  );
}

export default App;
