import { useState } from "react"
import TextAnimation from "./TextAnimation";

export default function ItemSelector({input, title, color}) {
    const screenheight = window.screen.height;
    const [selectedElement, setSelectedElement] = useState((input?.length > 0) ? input[0] : null);

    return (
        <>
            <div className="itemselector-wrapper">
                <div className="itemselector-card">
                    <h4 style={{color: color, padding:"1rem 1rem 1rem 1rem", margin: "0% 0%"}}><TextAnimation text={title}/> </h4>
                    <div className = "itemselector-display-wrapper">
                        <div className = "buttons-wrapper">
                            {input.map((element) => (
                                <div className="button-selector" onClick={() => setSelectedElement(element)}>
                                    <h4> <TextAnimation text={element.name}/> </h4>
                                </div>
                            ))}  
                        </div>
                        <div>
                            {selectedElement.description.map((line) => (
                                <h4 className="itemselector-line">{line}</h4>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img src={selectedElement.image} style={{maxWidth: "42%", maxHeight: `${screenheight * .75}px`, padding: "10rem 2rem 0rem 0rem", objectFit: "contain", objectPosition: "top"}} alt={""}></img>
        </>

    )

}
