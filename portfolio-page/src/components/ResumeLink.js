import React from "react";
import ResumeFile from "../utilities/BrianGleasonResume.pdf";
import ParticlesBg from 'particles-bg';


export default function ResumeLink() {
  window.open(ResumeFile);
  return (

    <div style={{color: "white", textAlign: "center", marginTop: "10%", justifyContent: "center", alignItems: "center", fontSize: "2.25vw", display: "flex", flexFlow: "column"}}>
      <ParticlesBg type="cobweb" bg={{zIndex: -1,width: "100%", height: "600%", position: "absolute"}} num={300}/>

      <div style={{marginBottom: "5%", marginLeft: "10%", marginRight: "10%"}}>
      Please click the link below if you have not been redirected, or enable popups and refresh the page.
      </div>
      <div className="mobile-button-selector" style={{color: "black", padding: "1rem"}} href={ResumeFile}> Resume PDF</div>
    </div>

  );
}