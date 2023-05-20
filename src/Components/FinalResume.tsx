import React from "react";
import { useContext } from "react";
import { context } from "../App";

import CommonStyles from "./Styles/Common.module.css";
import RightSide from "./InfoUpdateComponents/RightSide";
export default function FinalResume() {
  const useAppContext4 = useContext(context);
  return <div className={CommonStyles.finalResume}>საბოლოო</div>;
}
