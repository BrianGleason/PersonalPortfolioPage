import TextAnimation from "./TextAnimation"

export default function MobileAboutMe() {
    const textblock = `I'm a computer science major and rising senior at Northwestern University. I'm excited to develop my career and my abilities as a software engineer
    by delivering software solutions to solve exciting problems with cutting edge technology. My primary experience lies in 
    fullstack development with React/Javascript and Java, but I also have some experience with AI/ML using Python and Cloud technologies such as AWS and Google Cloud.`
    return (
    <div className="mobile-aboutme-wrapper">
        <div className="mobile-card">
            <div style={{display: "inline-flex"}}>
                <div>
                    <h4 className="mobile-aboutme-name"> <TextAnimation text="Hello, my name is Brian."/></h4>
                    <h4 className="mobile-aboutme-subname"> <TextAnimation text="And I'm a Software Engineer."/></h4>

                    <h4 className="mobile-aboutme-line"> <TextAnimation text={textblock}/> </h4>
                </div>
            </div>
        </div>
    </div>
    )
}