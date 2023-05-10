import React from "react";
import { useContext } from "react";
import { context } from "../App";

import georgiaFlag from "../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
import lightMode from "../Assets/Icon/sunMode.svg";
import darkMode from "../Assets/Icon/nightMode.svg";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";

import CommonStyles from "./Common.module.css";
import PersonalStyles from "./Personal.module.css";

export default function Personal() {
  const useAppContext1 = useContext(context);

  return (
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <div className={CommonStyles.infoContainer}>
        <img
          src={Ellipse}
          alt="Ellipse"
          className={CommonStyles.ellipse}
          onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
        />
        <img
          src={Vector}
          alt="Vector"
          className={CommonStyles.vector}
          onClick={() => useAppContext1.sPage(useAppContext1.cPage - 1)}
        />
        <div className={CommonStyles.skeleton}>
          <div className={CommonStyles.dFlex}>
            <p
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontWeight: "700",
              }}
            >
              პირადი ინფო
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              1/3
            </p>
          </div>
          <hr style={{ marginBottom: "69px" }} />
          <div className={PersonalStyles.nameUSername}>
            <div className={PersonalStyles.namePart}>
              <label htmlFor="namef" className={CommonStyles.labelStandard}>
                სახელი
              </label>
              <input
                type="text"
                placeholder="ანზორ"
                id="namef"
                className={CommonStyles.inputStandard}
              />
              <span className={CommonStyles.spanStandard}>
                მინიმუმ 2 ასო, ქართული ასოები
              </span>
            </div>
            <div className={PersonalStyles.lastNamePart}>
              <label htmlFor="userName" className={CommonStyles.labelStandard}>
                გვარი
              </label>
              <input
                type="text"
                placeholder="მუმლაძე"
                id="userName"
                className={CommonStyles.inputStandard}
              />
              <span className={CommonStyles.spanStandard}>
                მინიმუმ 2 ასო, ქართული ასოები
              </span>
            </div>
          </div>
          <div className={PersonalStyles.upload}>
            <p>პირადი ფოტოს ატვირთვა</p>
            <label
              htmlFor="uploadImg"
              style={{ textAlign: "center" }}
              id="textArea"
            >
              ატვირთვა
              <input
                type="file"
                alt="upload photo"
                accept="image/*"
                id="uploadImg"
              />
              {/* allowing only Images */}
            </label>
          </div>
          <div className={PersonalStyles.aboutUs}>
            <label>
              ჩვენს შესახებ{" "}
              <span className={CommonStyles.spanStandard}>
                (არასავალდებულო)
              </span>
            </label>
            <textarea placeholder="ზოგადი ინფო შენ შესახებ"></textarea>

            <div className={PersonalStyles.mail}>
              <label htmlFor="email" className={CommonStyles.labelStandard}>
                ელ.ფოსტა
              </label>
              <input
                type="email"
                placeholder="anzorr777@redberry.ge"
                id="email"
                className={CommonStyles.inputStandard}
              />
              <span className={CommonStyles.spanStandard}>
                უნდა მთავრდებოდეს @redberry.ge-ით
              </span>
            </div>
            <div className={PersonalStyles.telephone}>
              <label htmlFor="tel" className={CommonStyles.labelStandard}>
                მობილურის ნომერი
              </label>
              <input
                type="tel"
                placeholder="+995 551 12 34 56"
                id="tel"
                className={CommonStyles.inputStandard}
              />
              <span className={CommonStyles.spanStandard}>
                უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
              </span>
            </div>
          </div>
        </div>
        <button
          className={CommonStyles.purpleButton}
          onClick={() => {
            useAppContext1.sPage(useAppContext1.cPage + 1);
          }}
        >
          შემდეგი
        </button>
      </div>
      <div className={CommonStyles.renderContainer}>
        <img
          src={OrangeLogo}
          alt="OrangeLogo"
          className={CommonStyles.orange}
        />
      </div>
    </div>
  );
}
