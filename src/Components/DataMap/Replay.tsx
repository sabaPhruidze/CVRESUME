import React, { useContext } from "react";

import { context } from "../../App";

import CommonStyles from "../Common.module.css";
import HomeStyles from "../Home.module.css";

import georgiaFlag from "../../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../../Assets/Img/common/unitedKingdom.png";
import lightMode from "../../Assets/Icon/sunMode.svg";
import darkMode from "../../Assets/Icon/nightMode.svg";

import background from "../../Assets/Img/1. FirstPage/background1.jpg";
import backgroundDark from "../../Assets/Img/1. FirstPage/backgroundDark.jpg";
import redBerryBanner from "../../Assets/Img/1. FirstPage/redberryBanner.svg";
import diploma from "../../Assets/Img/1. FirstPage/diploma.svg";

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
    },
    {
      src: cLanguage !== true ? unitedKingdomFlag : georgiaFlag,
      alt: "language",
      className: `${CommonStyles.language} ${HomeStyles.language}`,
      onClick: () => sLanguage(!useAppContext0.cLanguage),
    },
    {
      src: cBGColor ? backgroundDark : background,
      alt: "background",
      className: HomeStyles.bgImage,
    },
    {
      src: redBerryBanner,
      alt: "redBerryBanner",
      className: cBGColor
        ? `${HomeStyles.banner} ${HomeStyles.bannerDark}`
        : HomeStyles.banner,
    },
    {
      src: diploma,
      alt: "diploma",
      className: cBGColor ? HomeStyles.diplomaImgDark : HomeStyles.diplomaImg,
    },
  ];

  return (
    <>
      {imgData.map((data, index) => (
        <div key={index}>
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
