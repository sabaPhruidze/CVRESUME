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
    cCourse1,
    sCourse1,
    cQuality1,
    sQuality1,
    cFinishDate1,
    sFinishDate1,
    cDOE1,
    sDOE1,
    cCourse2,
    sCourse2,
    cQuality2,
    sQuality2,
    cFinishDate2,
    sFinishDate2,
    cDOE2,
    sDOE2,
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
      htmlForId: "Studyplace1",
      set: sCourse1,
      value: cCourse1,
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
      htmlForId: "Studyplace2",
      set: sCourse2,
      value: cCourse2,
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
  const handleChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sQuality1(e.target.value);
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    sQuality2(e.target.value);
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
      ref: ExperienceDateEndRef, ///aaaaaaaaaaaaaaaqqqqqqqqqqqq
    },
  ];
  const dataMap1 = [
    {
      labelHtmlFor: "finishDate1",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sFinishDate1(e.target.value),
      value: cFinishDate1,
      key: 1,
      ref: ExperienceDateEndRef1,
    },
  ];
  const dataMap2 = [
    {
      labelHtmlFor: "finishDate2",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => sFinishDate2(e.target.value),
      value: cFinishDate2,
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
      htmlFor: "Describe1",
      ref: ExperienceTextAreaRef1,
      labelContext: languageChanger(cLanguage, "აღწერა", "Describe"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "განათლების აღწერა",
        "Describe the knowledge"
      ),
      onChange: (e: any) => {
        sDOE1(e.target.value);
        if (ExperienceTextAreaRef1.current.value.length === 0) {
          ExperienceTextAreaRef1.current.style.border = "1px solid black";
        }
      },
      value: cDOE1,
    },
  ];
  const DataOfTextArea2 = [
    {
      key: 0,
      htmlFor: "Describe2",
      ref: ExperienceTextAreaRef2,
      labelContext: languageChanger(cLanguage, "აღწერა", "Describe"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "განათლების აღწერა",
        "Describe the knowledge"
      ),
      onChange: (e: any) => {
        sDOE2(e.target.value);
        if (ExperienceTextAreaRef2.current.value.length === 0) {
          ExperienceTextAreaRef2.current.style.border = "1px solid black";
        }
      },
      value: cDOE2,
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
                      border:
                        !cVisible1 && (cBGColor || !cBGColor)
                          ? "1px solid #BCBCBC"
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
                  border: "1px solid #BCBCBC",
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
                      border: "1px solid #BCBCBC",
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
                  maxLength={700}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    border: "1px solid #BCBCBC",
                    padding: "13px 16px",
                    width: "100%",
                    height: 179,
                  }}
                  ref={data.ref}
                ></textarea>
                <hr
                  style={{
                    width: "100%",
                    height: "1px",
                    marginTop: "54px",
                    color: "#BCBCBC",
                  }}
                />
              </div>
            ))}
          </>
        </div>
      </div>
      {cMoreExperience >= 1 ? (
        <div
          className={CommonStyles.replayThisPart}
          style={{ marginTop: "150px" }}
        >
          <div className={infoUpdateStyles.positionKnowledgeInput}>
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
                          !cVisible1 && (cBGColor || !cBGColor)
                            ? "1px solid #BCBCBC"
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
                  value={cQuality1}
                  onChange={handleChange1}
                  className={infoUpdateStyles.options}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    border: "1px solid #BCBCBC",
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
              {dataMap1.map((data: any) => {
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
                        border: "1px solid #BCBCBC",
                        paddingLeft: 16,
                      }}
                      ref={data.ref}
                    />
                  </div>
                );
              })}
            </>
          </div>
          <div
            className={infoUpdateStyles.descriptionKnowledge}
            style={{
              position: "absolute",
              zIndex: 3,
              top: "940px",
              left: "0px",
            }}
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
                    maxLength={700}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid #BCBCBC",
                      padding: "13px 16px",
                      width: "100%",
                      height: 179,
                    }}
                    ref={data.ref}
                  ></textarea>
                  <hr
                    style={{
                      width: "100%",
                      height: "1px",
                      marginTop: "54px",
                      color: "#BCBCBC",
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
        <div
          className={CommonStyles.replayThisPart}
          style={{ marginTop: "350px" }}
        >
          <div className={infoUpdateStyles.positionKnowledgeInput}>
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
                          !cVisible1 && (cBGColor || !cBGColor)
                            ? "1px solid #BCBCBC"
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
                  value={cQuality2}
                  onChange={handleChange2}
                  className={infoUpdateStyles.options}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    border: "1px solid #BCBCBC",
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
              {dataMap2.map((data: any) => {
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
                        border: "1px solid #BCBCBC",
                        paddingLeft: 16,
                      }}
                      ref={data.ref}
                    />
                  </div>
                );
              })}
            </>
          </div>
          <div
            className={infoUpdateStyles.descriptionKnowledge}
            style={{
              position: "absolute",
              zIndex: 3,
              top: "1500px",
              left: "0px",
            }}
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
                    maxLength={700}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid #BCBCBC",
                      padding: "13px 16px",
                      width: "100%",
                      height: 179,
                    }}
                    ref={data.ref}
                  ></textarea>
                  <hr
                    style={{
                      width: "100%",
                      height: "1px",
                      marginTop: "54px",
                      color: "#BCBCBC",
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
