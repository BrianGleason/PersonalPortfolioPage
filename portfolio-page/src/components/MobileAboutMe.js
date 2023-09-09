import TextAnimation from "./TextAnimation"

export default function MobileAboutMe() {
    const textblock = `I'm a software engineer with a passion for problem solving, lifelong learning, and building lasting solutions. I have a range of experience in backend
    data processing with Spark, fullstack development with React and Java, and cloud technologies like AWS and Google Cloud.`
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