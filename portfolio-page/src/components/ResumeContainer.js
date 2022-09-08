import TextAnimation from "./TextAnimation";
import ResumeImage from "../utilities/BrianGleasonResumeImg.jpg";
import ResumeFile from "../utilities/BrianGleasonResume.pdf";


export default function ResumeContainer({color, screenheight, reference}) {

    return(
        <div style={{display: "flex", justifyContent: "center", minHeight: `${screenheight * .8}px`}} ref={reference}>
            <div className="resumeContainer-wrapper">
                <div className="card">
                    <h4 style={{color:color, padding:"1rem 1rem", margin: "0% 0%"}}><TextAnimation text="Resume"/> </h4>
                    <a style={{color:color, padding: "3rem 1rem"}} href={ResumeFile} download>Click to download</a>
                    <img src={ResumeImage} style={{maxWidth: "100%", padding: "1rem 0rem"}} alt={"Resume"}></img>
                </div>
            </div>
        </div>
    )
}