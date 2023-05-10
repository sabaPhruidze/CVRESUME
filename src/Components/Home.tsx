import React from "react";
import { useContext } from "react";
import { context } from "../App";

import georgiaFlag from "../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
import lightMode from "../Assets/Icon/sunMode.svg";
import darkMode from "../Assets/Icon/nightMode.svg";

import background from "../Assets/Img/1. FirstPage/background1.png";
import backgroundDark from "../Assets/Img/1. FirstPage/backgroundDark.jpg";
import redBerryBanner from "../Assets/Img/1. FirstPage/redberryBanner.svg";
import diploma from "../Assets/Img/1. FirstPage/diploma.svg";

import CommonStyles from "./Common.module.css";
import HomeStyles from "./Home.module.css";

export default function Home() {
  const useAppContext0 = useContext(context);
  return (
    <div className={CommonStyles.container}>
      <img
        src={useAppContext0.cBGColor ? lightMode : darkMode}
        alt="light or dark"
        className={
          useAppContext0.cBGColor
            ? `${CommonStyles.modeSun} ${HomeStyles.mode}`
            : `${CommonStyles.modeMoon} ${HomeStyles.mode}`
        }
        onClick={() => {
          useAppContext0.sBGColor(!useAppContext0.cBGColor);
        }}
      />
      <img
        src={
          useAppContext0.cLanguage !== true ? unitedKingdomFlag : georgiaFlag
        }
        alt="language"
        className={`${CommonStyles.language} ${HomeStyles.language}`}
        onClick={() => {
          useAppContext0.sLanguage(!useAppContext0.cLanguage);
        }}
      />
      <img
        src={useAppContext0.cBGColor ? backgroundDark : background}
        alt="background"
        className={HomeStyles.bgImage}
      />
      <img
        src={redBerryBanner}
        alt="redBerryBanner"
        className={
          useAppContext0.cBGColor
            ? `${HomeStyles.banner} ${HomeStyles.bannerDark}`
            : HomeStyles.banner
        }
      />
      <hr
        className={
          useAppContext0.cBGColor ? HomeStyles.lineDark : HomeStyles.line
        }
      />
      <button
        className={
          useAppContext0.cBGColor ? HomeStyles.buttonDark : HomeStyles.button
        }
        onClick={() => useAppContext0.sPage(1)}
      >
        {useAppContext0.cLanguage === false
          ? "რეზიუმეს დამატება"
          : "Add resume"}
      </button>
      <img
        src={diploma}
        alt="diploma"
        className={
          useAppContext0.cBGColor
            ? HomeStyles.diplomaImgDark
            : HomeStyles.diplomaImg
        }
      />
    </div>
  );
}
