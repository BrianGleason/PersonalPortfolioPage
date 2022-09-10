import TextAnimation from "./TextAnimation"
import {LIGHT_ORANGE, ORANGE, RED} from "../utilities/Constants"

export default function Navbar({goToAbout, goToExperience, goToProjects, goToResume}) {

    return (
        <nav className = "mobile-navbar-nav">
            <div className="navbar-navs">
                <div className="mobile-navbar-btn" onClick={goToAbout}> 
                    <div className="mobile-navbar-btn-text"><TextAnimation text="About Me"/></div>
                </div>
                <div className="mobile-navbar-btn" onClick={goToExperience}> 
                    <div className="mobile-navbar-btn-text" style={{color: LIGHT_ORANGE}}><TextAnimation text="Experience"/></div>
                </div>
                <div className="mobile-navbar-btn" onClick={goToProjects}> 
                    <div className="mobile-navbar-btn-text" style={{color: ORANGE}}><TextAnimation text="Projects"/></div>
                </div>
                <div className="mobile-navbar-btn" onClick={goToResume}> 
                    <div className="mobile-navbar-btn-text" style={{color: RED}}><TextAnimation text="Resume"/></div>
                </div>
            </div>
        </nav>
    )
}