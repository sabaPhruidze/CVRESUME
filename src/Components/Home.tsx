import React from "react";
import { useContext } from "react";
import { context } from "../App";
import { ImgReplay } from "./DataMap/Replay";
import { ButtonReplay } from "./DataMap/Replay";
import CommonStyles from "./Common.module.css";
import HomeStyles from "./Home.module.css";

export default function Home() {
  const useAppContext0 = useContext(context);
  return (
    <div className={CommonStyles.container}>
      <ImgReplay />
      <hr
        className={
          useAppContext0.cBGColor ? HomeStyles.lineDark : HomeStyles.line
        }
      />
      <ButtonReplay />
    </div>
  );
}
