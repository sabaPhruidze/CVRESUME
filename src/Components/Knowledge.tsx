import React from "react";
import { useContext } from "react";
import { context } from "../App";

export default function Knowledge() {
  const useAppContext3 = useContext(context);
  return <div>{useAppContext3.cBGColor ? "Knowledge" : "Knowledge"}</div>;
}
