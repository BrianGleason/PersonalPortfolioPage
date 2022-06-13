export default function Navbar() {
    return (
        <nav className = "navbar-nav">
            <h4 className="navbar-logotext">Brian Gleason</h4>
            <div className="navbar-navs">
                <div>
                    <h4 classname="navbar-option" style={{color:"#faec98"}}>Overview </h4>
                </div>
                <div>
                    <h4 classname="navbar-option"> Experience </h4>
                </div>
                <div>
                    <h4 classname="navbar-option" style={{color:"#fa9b6b"}}> Projects </h4>
                </div>
                <div>
                    <h4 classname="navbar-option"style={{color:"#fa8773"}}> Resume</h4>
                </div>
            </div>
        </nav>
    )
}