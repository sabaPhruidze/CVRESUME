import React from "react";
import { useContext } from "react";
import { context } from "../App";
import { ImgReplay } from "./DataMap/Replay";
import { ButtonReplay } from "./DataMap/Replay";
import CommonStyles from "./Styles/Common.module.css";
import HomeStyles from "./Styles/Home.module.css";

export default function Home() {
  const useAppContext0 = useContext(context);
  return (
    <div className={CommonStyles.container}>
      <ImgReplay />
      <hr
        className={
          useAppContext0.cBGColor
            ? `${HomeStyles.line} ${HomeStyles.lineDark}`
            : HomeStyles.line
        }
      />
      <ButtonReplay />
    </div>
  );
}
