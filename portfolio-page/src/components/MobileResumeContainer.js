import TextAnimation from "./TextAnimation";
import ResumeImage from "../utilities/BrianGleasonResumeImg.jpg";
import ResumeFile from "../utilities/BrianGleasonResume.pdf";


export default function ResumeContainer({color, screenheight, reference}) {

    return(
        <div style={{display: "flex", justifyContent: "center", minHeight: `${screenheight * .8}px`, maxWidth: "80vw"}} ref={reference}>
            <div className="mobile-resumeContainer-wrapper">
                <div className="card">
                    <h4 style={{color:color, padding:"1vh 1rem", margin: "0% 0%"}}><TextAnimation text="Resume"/> </h4>
                    <a style={{color:color, padding: "3vh 0vh 0vh 1rem", fontSize: "1rem"}} href={ResumeFile} download>Click to download</a>
                    <img src={ResumeImage} style={{maxWidth: "100%", padding: "1vh 0rem"}} alt={"Resume"}></img>
                </div>
            </div>
        </div>
    )
}