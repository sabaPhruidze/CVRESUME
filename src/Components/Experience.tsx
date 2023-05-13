import React from "react";
import { useContext, createContext, useState, useRef } from "react";

import CommonStyles from "./Common.module.css";
import PersonalStyles from "./Personal.module.css";

export const MyExperienceLeftSideContext = createContext<any>("w");
export default function Experience() {
  return (
    <div
      style={{
        width: 1098,
        height: 1080,
        backgroundColor: "#f9f9f9",
        color: "black",
        position: "absolute",
        zIndex: "1",
        top: 0,
        left: 0,
      }}
    >
      width:1098px; height:1080px; background-color: #090909; color:white;
      position: absolute; z-index: 1; top:0; left:0; fewf
    </div>
  );
}
