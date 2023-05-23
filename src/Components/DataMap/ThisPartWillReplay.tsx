import React, { useContext } from "react";
import CommonStyles from "../Styles/Common.module.css";
import infoUpdateStyles from "../Styles/infoUpdate.module.css";
import { context } from "../../App";

export default function ThisPartWillReplay() {
  const useAppContext0 = useContext(context);
  const {
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
    ExperienceDateEndRef1,
    ExperienceTextAreaRef1,
    ExperienceDateEndRef2,
    ExperienceTextAreaRef2,
  } = useAppContext0;
  const experienceData = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "თანამდებობა", "Position"),
      htmlForId: "position",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Position", JSON.stringify(change));
        sPosition(change);
      },
      set: sPosition,
      value: cPosition,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "დეველოპერი, დიზაინერი, ა.შ.",
        "Developer, designer, etc."
      ),
      borderCorrect: cCorrect5,
    },
    {
      fullDivName: infoUpdateStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Employer", JSON.stringify(change));
        sEmployer(change);
      },
      set: sEmployer,
      value: cEmployer,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
      borderCorrect: cCorrect6,
    },
  ];
  const experienceData1 = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "თანამდებობა", "Position"),
      htmlForId: "position1",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Position1", JSON.stringify(change));
        sPosition1(change);
      },
      set: sPosition1,
      value: cPosition1,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "დეველოპერი, დიზაინერი, ა.შ.",
        "Developer, designer, etc."
      ),
    },
    {
      fullDivName: infoUpdateStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer1",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Employer1", JSON.stringify(change));
        sEmployer1(change);
      },
      set: sEmployer1,
      value: cEmployer1,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
    },
  ];
  const experienceData2 = [
    {
      fullDivName: infoUpdateStyles.position,
      content: languageChanger(cLanguage, "თანამდებობა", "Position"),
      htmlForId: "position2",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Position2", JSON.stringify(change));
        sPosition2(change);
      },
      set: sPosition2,
      value: cPosition2,
      inputPlaceHolder: languageChanger(
        cLanguage,
        "დეველოპერი, დიზაინერი, ა.შ.",
        "Developer, designer, etc."
      ),
    },
    {
      fullDivName: infoUpdateStyles.employer,
      content: !cLanguage ? "დამსაქმებელი" : "Employer",
      htmlForId: "employer2",
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Employer2", JSON.stringify(change));
        sEmployer2(change);
      },
      set: sEmployer2,
      value: cEmployer2,
      inputPlaceHolder: !cLanguage ? "დამსაქმებელი" : "Employer",
    },
  ];
  const dataMap = [
    {
      labelHtmlFor: "startDate",
      labelContent: languageChanger(
        cLanguage,
        "დაწყების რიცხვი",
        "Start number"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        sStartDate(change);
        localStorage.setItem("startDate", JSON.stringify(change));
      },
      value: cStartDate,
      key: 0,
      ref: ExperienceDateStartRef,
    },
    {
      labelHtmlFor: "EndDate",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("endDate", JSON.stringify(change));
        sEndDate(change);
      },
      value: cEndDate,
      key: 1,
      ref: ExperienceDateEndRef,
    },
  ];
  const dataMap1 = [
    {
      labelHtmlFor: "startDate1",
      labelContent: languageChanger(
        cLanguage,
        "დაწყების რიცხვი",
        "Start number"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        sStartDate1(change);
        localStorage.setItem("startDate1", JSON.stringify(change));
      },
      value: cStartDate1,
      key: 0,
    },
    {
      labelHtmlFor: "EndDate1",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("endDate1", JSON.stringify(change));
        sEndDate1(change);
      },
      value: cEndDate1,
      key: 1,
      ref: ExperienceDateEndRef1,
    },
  ];
  const dataMap2 = [
    {
      labelHtmlFor: "startDate2",
      labelContent: languageChanger(
        cLanguage,
        "დაწყების რიცხვი",
        "Start number"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        sStartDate2(change);
        localStorage.setItem("startDate2", JSON.stringify(change));
      },
      value: cStartDate2,
      key: 0,
    },
    {
      labelHtmlFor: "EndDate2",
      labelContent: languageChanger(
        cLanguage,
        "დამთავრების რიცხვი",
        "End date"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("endDate2", JSON.stringify(change));
        sEndDate2(change);
      },
      value: cEndDate2,
      key: 1,
      ref: ExperienceDateEndRef2,
    },
  ];
  const DataOfTextArea = [
    {
      key: 0,
      htmlFor: "Description",
      ref: ExperienceTextAreaRef,
      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Description", JSON.stringify(change));
        sDescription(change);
      },
      value: cDescription,
    },
  ];
  const DataOfTextArea1 = [
    {
      key: 0,
      htmlFor: "Description1",

      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Description1", JSON.stringify(change));
        sDescription1(change);
      },
      value: cDescription1,
    },
  ];
  const DataOfTextArea2 = [
    {
      key: 0,
      htmlFor: "Description2",
      labelContext: languageChanger(cLanguage, "აღწერა", "Description"),
      // spanContext: languageChanger(cLanguage, "(არასავალდებულო)", "(optional)"),
      placeHolder: languageChanger(
        cLanguage,
        "როლი თანამდებობაზე და ზოგადი აღწერა",
        "Role in the position and general description"
      ),
      onChange: (e: any) => {
        const change = e.target.value;
        localStorage.setItem("Description2", JSON.stringify(change));
        sDescription2(change);
      },
      value: cDescription2,
    },
  ];
  function languageChanger(changeReason: boolean, geo: string, eng: string) {
    return !changeReason ? geo : eng;
  }
  return (
    <>
      <div className={CommonStyles.replayThisPart} ref={replayRef}>
        <div className={infoUpdateStyles.positionEmployerInput}>
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
                      border: cVisible1
                        ? data.borderCorrect
                          ? "1px solid #98E37E"
                          : "1px solid #EF5050"
                        : "1px solid #BCBCBC",
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                    }}
                    value={data.value}
                    onChange={data.onChange}
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
            {dataMap.map((data: any) => {
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
                        : "1px solid #BCBCBC",
                      paddingLeft: 16,
                    }}
                    ref={data.ref}
                  />
                </div>
              );
            })}
          </>
        </div>
        <div className={infoUpdateStyles.description}>
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
                  maxLength={280}
                  style={{
                    backgroundColor: cBGColor ? "black" : "white",
                    color: cBGColor ? "white" : "black",
                    border: "1px solid #BCBCBC",
                    padding: "13px 16px",
                  }}
                  ref={data.ref}
                  value={data.value}
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
      {cMoreExperience >= 1 ? (
        <div className={CommonStyles.replayThisPart} ref={replayRef}>
          <div
            className={infoUpdateStyles.positionEmployerInput}
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
                        border: "1px solid #BCBCBC",

                        backgroundColor: cBGColor ? "black" : "white",
                        color: cBGColor ? "white" : "black",
                      }}
                      value={data.value}
                      onChange={data.onChange}
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
                    value={data.value}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid #BCBCBC",
                      padding: "13px 16px",
                    }}
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
        <div className={CommonStyles.replayThisPart} ref={replayRef}>
          <div
            className={infoUpdateStyles.positionEmployerInput}
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
                        border: "1px solid #BCBCBC",
                        backgroundColor: cBGColor ? "black" : "white",
                        color: cBGColor ? "white" : "black",
                      }}
                      value={data.value}
                      onChange={data.onChange}
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
                    value={data.value}
                    style={{
                      backgroundColor: cBGColor ? "black" : "white",
                      color: cBGColor ? "white" : "black",
                      border: "1px solid #BCBCBC",
                      padding: "13px 16px",
                    }}
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
