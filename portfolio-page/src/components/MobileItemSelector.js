import { useState } from "react"
import TextAnimation from "./TextAnimation";

export default function MobileItemSelector({input, title, color}) {
    const [selectedElement, setSelectedElement] = useState((input?.length > 0) ? input[0] : null);

    return (
        <div className="mobile-itemselector-wrapper">
            <div className="itemselector-card">
                <h4 style={{color: color, padding:"1vh 1vh 2vh 1vh", margin: "0% 0%"}}><TextAnimation text={title}/> </h4>
                <div className = "mobile-itemselector-display-wrapper">
                    <div className = "mobile-buttons-wrapper">
                        {input.map((element) => (
                            <div className="mobile-button-selector" onClick={() => setSelectedElement(element)}>
                                <h4> <TextAnimation text={element.name}/> </h4>
                            </div>
                        ))}  
                    </div>
                </div>
                <div>
                    <div style={{display: "flex", justifyContent: "center", flex: "1"}}>
                        <img src={selectedElement.image} style={{maxWidth: "70%", maxHeight: "70%", justifySelf: "center", alignSelf: "top", padding: "0rem 0rem 0rem 0rem"}} alt={""}></img>
                    </div>
                    {selectedElement.description.map((line) => (
                        <h4 className="mobile-itemselector-line">{line}</h4>

                    ))}
                </div>
            </div>
        </div>
    )

}
