import React from "react";
import ResumeContainer from "./ResumeContainer";
import {RED} from "../utilities/Constants";

export default function ResumeLink() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
          <ResumeContainer color={RED}/>
    </div>
  );
}