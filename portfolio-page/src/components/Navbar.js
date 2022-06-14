import TextAnimation from "./TextAnimation"

export default function Navbar() {
    return (
        <nav className = "navbar-nav">
            <h4 className="navbar-logotext"><TextAnimation text="Brian Gleason"/></h4>
            <div className="navbar-navs">
                <h4 style={{color:"#faec98"}}><TextAnimation text="Overview"/> </h4>
                <h4> <TextAnimation text="Experience"/> </h4>
                <h4 style={{color:"#fa9b6b"}}> <TextAnimation text="Projects"/> </h4>
                <h4 style={{color:"#fa8773"}}> <TextAnimation text="Resume"/></h4>
            </div>
        </nav>
    )
}