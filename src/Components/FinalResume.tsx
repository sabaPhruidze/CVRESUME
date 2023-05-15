import React from "react";
import { useContext } from "react";
import { context } from "../App";

import CommonStyles from "./Styles/Common.module.css";

export default function FinalResume() {
  const useAppContext4 = useContext(context);
  return <div>{useAppContext4.cBGColor ? "FinalResume" : "FinalResume"}</div>;
}
