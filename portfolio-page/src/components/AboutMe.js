import TextAnimation from "./TextAnimation"
import profile from "../profile.jpg"

export default function AboutMe() {
    const textblock = `I'm a software engineer and rising senior at Northwestern University, 
    specializing in _________. I'm excited to develop my career and improve at
    building professional quality software solutions. My primary experience lies in 
    fullstack development with Javascript and Java, and AI/ML using Python.`
    return (
    <div className="aboutme-wrapper">
        <div className="card">
            <div style={{display: "inline-flex"}}>
                <div>
                    <h4 style={{color:"#faec98", padding:"0.5rem 1rem", margin: "0% 0%"}}><TextAnimation text="Overview"/> </h4>
                    <h4 className="aboutme-name"> <TextAnimation text="Hello, my name is Brian."/></h4>
                    <h4 className="aboutme-line"> <TextAnimation text={textblock}/> </h4>
                </div>
                <img style={{maxWidth: "24rem", maxHeight: "24rem"}} src={profile} alt=""/>
            </div>
        </div>
    </div>
    )
}