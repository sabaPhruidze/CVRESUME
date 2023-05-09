import React from "react";
import { useContext } from "react";
import { context } from "../App";

export default function Experience() {
  const useAppContext2 = useContext(context);
  return <div>{useAppContext2.cBGColor ? "Experience" : "Experience"}</div>;
}
