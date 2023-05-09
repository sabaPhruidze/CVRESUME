import React from "react";
import { useContext } from "react";
import { context } from "../App";

import CommonStyles from "./Common.module.css";

import Ellipse from "../Assets/Img/2. SecondPage/Ellipse.svg";
import Vector from "../Assets/Img/2. SecondPage/Vectorvector.svg";

export default function Experience() {
  const useAppContext2 = useContext(context);
  return (
    <div className={`${CommonStyles.container} ${CommonStyles.containerFlex}`}>
      <div className={CommonStyles.infoContainer}>
        <img
          src={Ellipse}
          alt="Ellipse"
          className={CommonStyles.ellipse}
          onClick={() => useAppContext2.sPage(1)}
        />
        <img
          src={Vector}
          alt="Vector"
          className={CommonStyles.vector}
          onClick={() => useAppContext2.sPage(1)}
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
          <hr />
        </div>
      </div>
      <div className={CommonStyles.renderContainer}></div>
    </div>
  );
}
