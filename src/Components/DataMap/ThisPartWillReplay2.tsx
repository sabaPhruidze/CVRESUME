import React, { useContext } from "react";
import CommonStyles from "../Styles/Common.module.css";
import infoUpdateStyles from "../Styles/infoUpdate.module.css";
import { context } from "../../App";

export default function ThisPartWillReplay() {
  const useAppContext0 = useContext(context);
  const {
    cCourse,
    sCourse,
    cQuality,
    sQuality,
    cFinishDate,
    sFinishDate,
    cDOE,
    sDOE,
    cBGColor,
    cLanguage,
    cVisible1,
    sMoreExperience,
    cPosition,
    sPosition,
    cCorrect5,
    cCorrect6,
    cCorrect7,
    cCorrect8,
    cEmployer,
    sEmployer,
    replayRef,
    sStartDate,
    cStartDate,
    cEndDate,
    sEndDate,
    cDescription,
    sDescription,
    ExperienceTextAreaRef,
    ExperienceDateStartRef,
    ExperienceDateEndRef,
    cMoreExperience,
    cArray,
    cPosition1,
    sPosition1,
    cEmployer1,
    sEmployer1,
    cStartDate1,
    sStartDate1,
    cEndDate1,
    sEndDate1,
    cDescription1,
    sDescription1,

    cPosition2,
    sPosition2,
    cEmployer2,
    sEmployer2,
    cStartDate2,
    sStartDate2,
    cEndDate2,
    sEndDate2,
    cDescription2,
    sDescription2,
    cCorrect9,
    sCorrect9,
    cCorrect10,
    sCorrect10,
    ExperienceDateStartRef1,
    ExperienceDateEndRef1,
    ExperienceTextAreaRef1,
    ExperienceDateStartRef2,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef2,
  } = useAppContext0;
  const experienceData = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "სასწავლებელი", "Study place"),
      htmlForId: "Studyplace",
      set: sCourse,
      value: cCourse,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "სასწავლებელი",
        "Study place"
      ),
      borderCorrect: "cCorrect5", // ააააააააააააააააააააააააქ
    },
  ];
  const experienceData1 = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "სასწავლებელი", "Study place"),
      htmlForId: "Studyplace",
      set: sCourse,
      value: cCourse,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "სასწავლებელი",
        "Study place"
      ),
      borderCorrect: "cCorrect5", // ააააააააააააააააააააააააქ
    },
  ];
  const experienceData2 = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "სასწავლებელი", "Study place"),
      htmlForId: "Studyplace",
      set: sCourse,
      value: cCourse,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "სასწავლებელი",
        "Study place"
      ),
      borderCorrect: "cCorrect5", // ააააააააააააააააააააააააქ
    },
  ];
  const options = [
    "აირჩიეთ ხარისხი",
    "საშუალო სკოლის დიპლომი",
    "ზოგადსაგანმანათლებლო დიპლომი",
    "ბაკალავრი",
    "მაგისტრი",
    "ასოცირებული ხარისხი",
    "სტუდენტი",
    "კოლეჯის ხარისხის გარეშე",
    "სხვა",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sQuality(e.target.value);
  };
  const dataMap = [
    {
      labelHtmlFor: "finishDate",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sFinishDate(e.target.value),
      value: cFinishDate,
      key: 1,
      ref: ExperienceDateEndRef,
    },
  ];
  const dataMap1 = [
    {
      labelHtmlFor: "EndDate1",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sEndDate1(e.target.value),
      value: cEndDate1,
      key: 1,
      ref: ExperienceDateEndRef1,
    },
  ];
  const dataMap2 = [
    {
      labelHtmlFor: "EndDate2",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sEndDate2(e.target.value),
      value: cEndDate2,
      key: 1,
      ref: ExperienceDateEndRef2,
    },
  ];
  const DataOfTextArea = [
    {
      key: 0,
      htmlFor: "Describe",
      ref: ExperienceTextAreaRef,
      labelContext: languageChanger(cLanguage, "აღწერა", "Describe"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "განათლების აღწერა",
        "Describe the knowledge"
      ),
      onChange: (e: any) => {
        sDOE(e.target.value);
        if (
          ExperienceTextAreaRef.current.value.length === 0 &&
          cBGColor === true
        ) {
          ExperienceTextAreaRef.current.style.border = "1px solid white";
        } else if (
          ExperienceTextAreaRef.current.value.length === 0 &&
          cBGColor === false
        ) {
          ExperienceTextAreaRef.current.style.border = "1px solid black";
        } else {
          ExperienceTextAreaRef.current.style.border = "1px solid black";
        }
      },
      value: cDOE,
    },
  ];
  const DataOfTextArea1 = [
    {
      key: 0,
      htmlFor: "Description1",
      ref: ExperienceTextAreaRef1,
      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => {
        sDescription1(e.target.value);
        if (
          ExperienceTextAreaRef1.current.value.length === 0 &&
          cBGColor === true
        ) {
          ExperienceTextAreaRef1.current.style.border = "1px solid white";
        } else if (
          ExperienceTextAreaRef1.current.value.length === 0 &&
          cBGColor === false
        ) {
          ExperienceTextAreaRef1.current.style.border = "1px solid black";
        } else {
          ExperienceTextAreaRef1.current.style.border = "1px solid black";
        }
      },
      value: cDescription1,
    },
  ];
  const DataOfTextArea2 = [
    {
      key: 0,
      htmlFor: "Description2",
      ref: ExperienceTextAreaRef2,
      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => {
        sDescription2(e.target.value);
        if (
          ExperienceTextAreaRef2.current.value.length === 0 &&
          cBGColor === true
        ) {
          ExperienceTextAreaRef2.current.style.border = "1px solid white";
        } else if (
          ExperienceTextAreaRef2.current.value.length === 0 &&
          cBGColor === false
        ) {
          ExperienceTextAreaRef2.current.style.border = "1px solid black";
        } else {
          ExperienceTextAreaRef2.current.style.border = "1px solid black";
        }
      },
      value: cDescription2,
    },
  ];
  function languageChanger(changeReason: boolean, geo: string, eng: string) {
    return !changeReason ? geo : eng;
  }
  return (
    <>
      <div className={CommonStyles.replayThisPart}>
        <div className={infoUpdateStyles.positionKnowledgeInput}>
          <>
            {experienceData.map((data: any, idx: any) => {
              return (
                <div className={data.fullDivName} key={idx}>
                  <label
                    htmlFor={data.htmlForId}
                    className={CommonStyles.labelStandard}
                  >
                    {data.content}
                  </label>
                  <input
                    type="text"
                    placeholder={data.inputPlaceHolder}
                    id={data.htmlForId}
                    className={CommonStyles.inputStandard}
                    style={{
                      border: !cVisible1
                        ? cBGColor
                          ? "1px solid white"
                          : "1px solid black"
                        : data.borderCorrect
                        ? "1px solid #98E37E"
                        : "1px solid #EF5050",
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                    }}
                    value={data.value}
                    onChange={(event) => data.set(event.target.value)}
                  />
                  <span className={CommonStyles.spanStandard}>
                    {languageChanger(
                      cLanguage,
                      "მინიმუმ 2 სიმბოლო",
                      "At least 2 symbols"
                    )}
                  </span>
                </div>
              );
            })}
          </>
        </div>
        <div className={infoUpdateStyles.dateContainer}>
          <>
            <div
              style={{
                marginRight: "28px",
                width: "100%",
              }}
            >
              <label
                htmlFor="quality"
                style={{
                  marginBottom: "8px",
                  color: cBGColor ? "white" : "black",
                  fontWeight: "700",
                }}
              >
                ხარისხი
              </label>
              <select
                id="quality"
                value={cQuality}
                onChange={handleChange}
                className={infoUpdateStyles.options}
                style={{
                  backgroundColor: cBGColor ? "black" : "white",
                  color: cBGColor ? "white" : "black",
                  border: "1px solid black",
                  paddingLeft: 16,
                }}
              >
                {options.map((option, index) => (
                  <option
                    key={index}
                    value={option}
                    style={{ cursor: "pointer" }}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {dataMap.map((data: any) => {
              return (
                <div
                  key={data.key}
                  style={{
                    marginLeft: "28px",
                  }}
                >
                  <label
                    htmlFor={data.labelHtmlFor}
                    style={{
                      marginBottom: "8px",
                      color: cBGColor ? "white" : "black",
                      fontWeight: "700",
                    }}
                  >
                    {data.labelContent}
                  </label>
                  <input
                    type="date"
                    className={infoUpdateStyles.calendarInput}
                    onChange={data.onChange}
                    value={data.value}
                    id={data.labelHtmlFor}
                    style={{
                      backgroundColor: !cBGColor ? "white" : "black",
                      color: cBGColor ? "white" : "black",
                      border: cBGColor ? "1px solid white" : "1px solid black",
                      paddingLeft: 16,
                    }}
                    ref={data.ref}
                  />
                </div>
              );
            })}
          </>
        </div>
        <div className={infoUpdateStyles.descriptionKnowledge}>
          <>
            {DataOfTextArea.map((data: any) => (
              <div key={data.key}>
                <label
                  htmlFor={data.htmlFor}
                  className={CommonStyles.labelStandard}
                  style={{ display: "block" }}
                >
                  {data.labelContext}
                  <span className={CommonStyles.spanStandard}>
                    {data.spanContext}
                  </span>
                </label>
                <textarea
                  placeholder={data.placeHolder}
                  id={data.htmlFor}
                  onChange={data.onChange}
                  maxLength={250}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    border: "1px solid black",
                    padding: "13px 16px",
                    width: "100%",
                    height: 123,
                  }}
                  ref={data.ref}
                ></textarea>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    marginTop: "54px",
                  }}
                />
              </div>
            ))}
          </>
        </div>
      </div>
      {cMoreExperience >= 1 ? (
        <div className={CommonStyles.replayThisPart}>
          <div
            className={infoUpdateStyles.positionKnowledgeInput}
            style={{ marginTop: "270px" }}
          >
            <>
              {experienceData1.map((data: any, idx: any) => {
                return (
                  <div className={data.fullDivName} key={idx}>
                    <label
                      htmlFor={data.htmlForId}
                      className={CommonStyles.labelStandard}
                    >
                      {data.content}
                    </label>
                    <input
                      type="text"
                      placeholder={data.inputPlaceHolder}
                      id={data.htmlForId}
                      className={CommonStyles.inputStandard}
                      style={{
                        border:
                          !cVisible1 && cBGColor
                            ? "1px solid white"
                            : "1px solid black",

                        backgroundColor: cBGColor ? "black" : "white",
                        color: cBGColor ? "white" : "black",
                      }}
                      value={data.value}
                      onChange={(event) => data.set(event.target.value)}
                    />
                    <span className={CommonStyles.spanStandard}>
                      {languageChanger(
                        cLanguage,
                        "მინიმუმ 2 სიმბოლო",
                        "At least 2 symbols"
                      )}
                    </span>
                  </div>
                );
              })}
            </>
          </div>
          <div className={infoUpdateStyles.dateContainer}>
            <>
              {dataMap1.map((data: any) => {
                return (
                  <div
                    key={data.key}
                    style={{
                      marginRight: data.key === 0 ? "28px" : "",
                      marginLeft: data.key === 1 ? "28px" : "",
                    }}
                  >
                    <label
                      htmlFor={data.labelHtmlFor}
                      style={{
                        marginBottom: "8px",
                        color: cBGColor ? "white" : "black",
                        fontWeight: "700",
                      }}
                    >
                      {data.labelContent}
                    </label>
                    <input
                      type="date"
                      className={infoUpdateStyles.calendarInput}
                      onChange={data.onChange}
                      value={data.value}
                      id={data.labelHtmlFor}
                      style={{
                        backgroundColor: !cBGColor ? "white" : "black",
                        color: cBGColor ? "white" : "black",
                        border: cBGColor
                          ? "1px solid white"
                          : "1px solid black",
                      }}
                      ref={data.ref}
                    />
                  </div>
                );
              })}
            </>
          </div>
          <div
            className={infoUpdateStyles.description}
            style={{ marginTop: "600px" }}
          >
            <>
              {DataOfTextArea1.map((data: any) => (
                <div key={data.key}>
                  <label
                    htmlFor={data.htmlFor}
                    className={CommonStyles.labelStandard}
                    style={{ display: "block" }}
                  >
                    {data.labelContext}
                    <span className={CommonStyles.spanStandard}>
                      {data.spanContext}
                    </span>
                  </label>
                  <textarea
                    placeholder={data.placeHolder}
                    id={data.htmlFor}
                    onChange={data.onChange}
                    maxLength={250}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid black",
                      padding: "13px 16px",
                    }}
                    ref={data.ref}
                  ></textarea>
                  <hr
                    style={{
                      width: "100%",
                      height: "1px",
                      marginTop: "6px",
                    }}
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      ) : (
        ""
      )}
      {cMoreExperience >= 2 ? (
        <div className={CommonStyles.replayThisPart}>
          <div
            className={infoUpdateStyles.positionKnowledgeInput}
            style={{ marginTop: "270px" }}
          >
            <>
              {experienceData2.map((data: any, idx: any) => {
                return (
                  <div className={data.fullDivName} key={idx}>
                    <label
                      htmlFor={data.htmlForId}
                      className={CommonStyles.labelStandard}
                    >
                      {data.content}
                    </label>
                    <input
                      type="text"
                      placeholder={data.inputPlaceHolder}
                      id={data.htmlForId}
                      className={CommonStyles.inputStandard}
                      style={{
                        border:
                          !cVisible1 && cBGColor
                            ? "1px solid white"
                            : "1px solid black",
                        backgroundColor: cBGColor ? "black" : "white",
                        color: cBGColor ? "white" : "black",
                      }}
                      value={data.value}
                      onChange={(event) => data.set(event.target.value)}
                    />
                    <span className={CommonStyles.spanStandard}>
                      {languageChanger(
                        cLanguage,
                        "მინიმუმ 2 სიმბოლო",
                        "At least 2 symbols"
                      )}
                    </span>
                  </div>
                );
              })}
            </>
          </div>
          <div className={infoUpdateStyles.dateContainer}>
            <>
              {dataMap2.map((data: any) => {
                return (
                  <div
                    key={data.key}
                    style={{
                      marginRight: data.key === 0 ? "28px" : "",
                      marginLeft: data.key === 1 ? "28px" : "",
                    }}
                  >
                    <label
                      htmlFor={data.labelHtmlFor}
                      style={{
                        marginBottom: "8px",
                        color: cBGColor ? "white" : "black",
                        fontWeight: "700",
                      }}
                    >
                      {data.labelContent}
                    </label>
                    <input
                      type="date"
                      className={infoUpdateStyles.calendarInput}
                      onChange={data.onChange}
                      value={data.value}
                      id={data.labelHtmlFor}
                      style={{
                        backgroundColor: !cBGColor ? "white" : "black",
                        color: cBGColor ? "white" : "black",
                        border: cBGColor
                          ? "1px solid white"
                          : "1px solid black",
                      }}
                      ref={data.ref}
                    />
                  </div>
                );
              })}
            </>
          </div>
          <div
            className={infoUpdateStyles.description}
            style={{ position: "absolute", top: "calc(1209px + 431px)" }}
          >
            <>
              {DataOfTextArea2.map((data: any) => (
                <div key={data.key}>
                  <label
                    htmlFor={data.htmlFor}
                    className={CommonStyles.labelStandard}
                    style={{ display: "block" }}
                  >
                    {data.labelContext}
                    <span className={CommonStyles.spanStandard}>
                      {data.spanContext}
                    </span>
                  </label>
                  <textarea
                    placeholder={data.placeHolder}
                    id={data.htmlFor}
                    onChange={data.onChange}
                    maxLength={250}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid black",
                      padding: "13px 16px",
                    }}
                    ref={data.ref}
                  ></textarea>
                  <hr
                    style={{
                      width: "100%",
                      height: "1px",
                      marginTop: "6px",
                    }}
                  />
                </div>
              ))}
            </>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
