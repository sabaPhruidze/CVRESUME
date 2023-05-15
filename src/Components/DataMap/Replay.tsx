import React, { useContext } from "react";

import { context } from "../../App";

import CommonStyles from "../Styles/Common.module.css";
import HomeStyles from "../Styles/Home.module.css";

import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";
// for Home
import background from "../../Assets/Img/1. FirstPage/background1.jpg";
import backgroundDark from "../../Assets/Img/1. FirstPage/backgroundDark.jpg";
import redBerryBanner from "../../Assets/Img/1. FirstPage/redberryBanner.svg";
import diploma from "../../Assets/Img/1. FirstPage/diploma.svg";
// for Home

// for Home
export function ImgReplay() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sBGColor, cLanguage, sLanguage } = useAppContext0;

  const imgData = [
    {
      src: cBGColor ? lightMode : darkMode,
      alt: "light or dark",
      className: cBGColor
        ? `${CommonStyles.modeSun} ${HomeStyles.mode}`
        : `${CommonStyles.modeMoon} ${HomeStyles.mode}`,
      onClick: () => sBGColor(!useAppContext0.cBGColor),
      key: 0,
    },
    {
      src: cLanguage !== true ? unitedKingdomFlag : georgiaFlag,
      alt: "language",
      className: `${CommonStyles.language} ${HomeStyles.language}`,
      onClick: () => sLanguage(!useAppContext0.cLanguage),
      key: 1,
    },
    {
      src: cBGColor ? backgroundDark : background,
      alt: "background",
      className: HomeStyles.bgImage,
      key: 2,
    },
    {
      src: redBerryBanner,
      alt: "redBerryBanner",
      className: cBGColor
        ? `${HomeStyles.banner} ${HomeStyles.bannerDark}`
        : HomeStyles.banner,
      key: 3,
    },
    {
      src: diploma,
      alt: "diploma",
      className: cBGColor ? HomeStyles.diplomaImgDark : HomeStyles.diplomaImg,
      key: 4,
    },
  ];
  return (
    <>
      {imgData.map((data) => (
        <div key={data.key}>
          <img
            src={data.src}
            alt={data.alt}
            className={data.className}
            onClick={data.onClick}
          />
        </div>
      ))}
    </>
  );
}

export function ButtonReplay() {
  const useAppContext0 = useContext(context);
  const { cBGColor, sPage, cLanguage, cPage } = useAppContext0;
  const buttonDataHome = [
    {
      className: cBGColor ? HomeStyles.buttonDark : HomeStyles.button,
      onClick: () => sPage(1),
      language: cLanguage === false ? "რეზიუმეს დამატება" : "Add resume",
      key: 0,
    },
  ];

  return (
    <>
      {buttonDataHome.map((data) => (
        <button
          className={data.className}
          onClick={data.onClick}
          key={data.key}
        >
          {data.language}
        </button>
      ))}
    </>
  );
}

// for Home
export function headLineReplay() {}
