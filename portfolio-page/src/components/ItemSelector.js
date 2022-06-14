import { useState } from "react"
import TextAnimation from "./TextAnimation";

export default function ItemSelector({input, title}) {
    
    const inputNames = Object.keys(input);
    const [selectedName, setSelectedName] = useState((Object.keys(input).length > 0) ? Object.keys(input)[0] : null);

    return (
        <div className="aboutme-wrapper">
            <div className="card">
                <h4 style={{color:"#ffd5a1", padding:"1rem 1rem 1rem 1rem", margin: "0% 0%"}}><TextAnimation text={title}/> </h4>
                <div className = "itemselector-display-wrapper">
                    <div className = "buttons-wrapper">
                        {inputNames.map((name, i) => (
                            <div className="button-selector" onClick={() => setSelectedName(name)} key={i}>
                                <h4> <TextAnimation text={name}/> </h4>
                            </div>
                        ))}  
                    </div>
                    <div>
                        <h4 className="aboutme-line"><TextAnimation text={input[selectedName]}/></h4>
                    </div>
                </div>
            </div>
        </div>
    )

}
