import TextAnimation from "./TextAnimation"
import {LIGHT_ORANGE, ORANGE, RED} from "../utilities/Constants"

export default function Navbar({goToAbout, goToExperience, goToProjects, goToResume}) {

    return (
        <nav className = "navbar-nav">
            <h4 className="navbar-logotext"><TextAnimation text="Brian Gleason"/></h4>
            <div className="navbar-navs">
                <div className="navbar-btn" onClick={goToAbout}> 
                    <div className="navbar-btn-text"><TextAnimation text="Overview"/></div>
                </div>
                <div className="navbar-btn" onClick={goToExperience}> 
                    <div className="navbar-btn-text" style={{color: LIGHT_ORANGE}}><TextAnimation text="Experience"/></div>
                </div>
                <div className="navbar-btn" onClick={goToProjects}> 
                    <div className="navbar-btn-text" style={{color: ORANGE}}><TextAnimation text="Projects"/></div>
                </div>
                <div className="navbar-btn" onClick={goToResume}> 
                    <div className="navbar-btn-text" style={{color: RED}}><TextAnimation text="Resume"/></div>
                </div>
            </div>
        </nav>
    )
}