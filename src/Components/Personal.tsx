import React from "react";
import { createContext, useContext, useState } from "react";
import { context } from "../App";

import CommonInput from "./ForDataMap/CommonInput";
import CorrectWrongComponent from "./ForDataMap/CorrectWrongComponent";

import georgiaFlag from "../Assets/Img/common/georgia.png";
import unitedKingdomFlag from "../Assets/Img/common/unitedKingdom.png";
import lightMode from "../Assets/Icon/sunMode.svg";
import darkMode from "../Assets/Icon/nightMode.svg";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";
import OrangeLogo from "../Assets/Img/2. SecondPage/logoOrange.svg";
import mobileIcon from "../Assets/Icon/phoneIcon.svg";
import spiralIcon from "../Assets/Icon/@.svg";

import CommonStyles from "./Common.module.css";
import PersonalStyles from "./Personal.module.css";

export const MyPersonalContext = createContext<any>("s");

export default function Personal() {
  const useAppContext1 = useContext(context);

  const [cName, sName] = useState<string | undefined>();
  const [cUsername, sUsername] = useState<string | undefined>();
  const [cUploadImg, sUploadImg] = useState<File | null>();
  const [cEmail, sEmail] = useState<string | undefined>();
  const [cTel, sTel] = useState<string>();
  const [cAboutMe, sAboutMe] = useState<string | undefined>();

  const [cCorrect, sCorrect] = useState<boolean>(false);
  const [cCorrect1, sCorrect1] = useState<boolean>(false);
  const [cCorrect2, sCorrect2] = useState<boolean>(false);
  const [cCorrect3, sCorrect3] = useState<boolean>(false);
  const [cVisible, sVisible] = useState<boolean>(false);

  function validateInput(name: any, username: any) {
    const georgianWordsRegex = /^(?:.*[ა-ჰ]){2,}.*$/;
    if (name && georgianWordsRegex.test(name)) {
      sCorrect(true);
    } else {
      sCorrect(false);
    }
    if (username && georgianWordsRegex.test(username)) {
      sCorrect1(true);
    } else {
      sCorrect1(false);
    }
    //ესაა მთავარი რომ თუ ყველაფერი სწორადაა შევსებული ამ შემთხვევაში გადავიდეს შემდეგ გვერდზე
    // if (name && username) {
    //   useAppContext1.sPage(useAppContext1.cPage + 1);
    // }
  }

  return (
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <MyPersonalContext.Provider
        value={{
          cCorrect,
          cCorrect1,
          cCorrect2,
          cCorrect3,
          cVisible,
        }}
      >
        <CorrectWrongComponent />
      </MyPersonalContext.Provider>
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
            <MyPersonalContext.Provider
              value={{
                cCorrect,
                cCorrect1,
                sName,
                cVisible,
                sUsername,
              }}
            >
              <CommonInput />
            </MyPersonalContext.Provider>
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
                onChange={(e) => {
                  sUploadImg(e.target.files?.[0]);
                  //if something is uploaded it will be save in sUploadImg
                }}
              />
              {/* allowing only Images */}
            </label>
          </div>
          <div className={PersonalStyles.aboutUs}>
            <label htmlFor="aboutMe" className={CommonStyles.labelStandard}>
              ჩვენს შესახებ
              <span className={CommonStyles.spanStandard}>
                (არასავალდებულო)
              </span>
            </label>
            <textarea
              placeholder="ზოგადი ინფო შენ შესახებ"
              id="aboutMe"
              onChange={(e) => sAboutMe(e.target.value)}
              maxLength={250}
            ></textarea>
          </div>
          <div className={PersonalStyles.mail}>
            <label htmlFor="email" className={CommonStyles.labelStandard}>
              ელ.ფოსტა
            </label>
            <input
              type="email"
              placeholder="anzorr777@redberry.ge"
              id="email"
              className={CommonStyles.inputStandard}
              onChange={(e) => sEmail(e.target.value)}
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
              onChange={(e) => sTel(e.target.value)}
            />
            <span className={CommonStyles.spanStandard}>
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </span>
          </div>
        </div>
        <button
          className={CommonStyles.purpleButton}
          onClick={() => {
            validateInput(cName, cUsername);
            sVisible(true);
          }}
        >
          შემდეგი
        </button>
      </div>
      <div className={CommonStyles.renderContainer}>
        <div className={CommonStyles.lineName}>
          <div>{cName}</div>
          <div>{cUsername}</div>
        </div>
        <div className={CommonStyles.emailContainer}>
          {cEmail && (
            <>
              <img
                src={spiralIcon}
                alt="spiral Icon"
                className={CommonStyles.spiralIcon}
              />
            </>
          )}
          <div style={{ marginLeft: "5px" }}>{cEmail}</div>
        </div>
        <div className={CommonStyles.mobileContainer}>
          {cTel && (
            <>
              {" "}
              <img
                src={mobileIcon}
                alt="mobile icon"
                className={CommonStyles.mobileIcon}
              />
            </>
          )}
          <div style={{ marginLeft: "5px" }}>{cTel}</div>
        </div>
        <div className={CommonStyles.aboutMeContainer}>
          {cAboutMe && (
            <>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#F93B1D",
                  marginBottom: "15px",
                }}
              >
                ჩემს შესახებ
              </div>
            </>
          )}
          <div
            style={{
              width: "432px",
              height: "125px",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            {cAboutMe}
          </div>
        </div>
        {cUploadImg && (
          <img
            src={URL.createObjectURL(cUploadImg)} //I do not really knew this part but chatGPT helped me here
            alt="uploaded photo"
            className={CommonStyles.imageUpload}
          />
        )}
        <img
          src={OrangeLogo}
          alt="OrangeLogo"
          className={CommonStyles.orange}
        />
      </div>
    </div>
  );
}
