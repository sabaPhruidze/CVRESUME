import React from "react";
import { useContext } from "react";
import { context } from "../App";

export default function Personal() {
  const useAppContext1 = useContext(context);
  return <div>{useAppContext1.cBGColor ? "personal" : "personal"}</div>;
}
