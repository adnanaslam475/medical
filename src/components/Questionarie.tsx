import React, { useEffect, useRef, useState } from "react";
import VerticalProgress from "@mui/material/LinearProgress";
import HorizontalProgress from "@mui/material/LinearProgress";
import { Card, Grid, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Logo from "../components/policy_fetch_logo.png";
import IlusFirst from "../components/first_back.svg";
import IlusSecond from "../components/second_back.svg";
import IlusThird from "../components/third_back.svg";
import IlusFinal from "../components/final.svg";
// import usePrevious from "./usePrevious";
import Image from "next/image";
import Datetimestep from "./Datetimestep";
// import { createStyles, makeStyles } from "@mui/styles";
import RadioStep from "./RadioStep";
import Header from "./Header";
import AskName from "./AskName";
import AskPhone from "./AskPhone";

const obj = { 25: IlusFirst, 50: IlusSecond, 75: IlusThird, 100: IlusFinal };
export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

function Questionarie() {
  const [dobShow, setDobShow] = useState<string>("");
  const [progress, setProgress] = useState<number>(25);
  const [first, setFirst] = useState("");
  const p = usePrevious(progress);
  const handleSubmit = async () => {
    try {
      // quote_for --> first
      // dob --> first
      // tricare_coverage:'' --> three
      const obj = { quote_for: "", dob: "", tricare_coverage: "" };
    } catch (error) {
      console.log("ero", error);
    }
  };

  // useEffect(() => {
  //   if (progress !== p) {
  //     // setDobShow("");
  //   }
  // }, [progress]);

  console.log("dobShow--->", dobShow, progress);
  return (
    <div style={{ height: "50vh" }}>
      <Header />
      <div className="horizontal_progress">
        <HorizontalProgress variant="determinate" value={progress} />
        <p
          className="bg-gray-100 rounded-xl pt-1 pb-1 pl-2 pr-2 w-16 text-center mt-2"
          style={{
            fontSize: "12px",
            margin: `10px 0 0 ${progress == 100 ? 92 : progress + "%"}`,
            transition: "0.3s",
          }}
        >
          {progress == 100
            ? "DONE!"
            : `${Object.keys(obj).indexOf(progress + "") + 1} of 4`}
        </p>
      </div>
      <Grid className="flex items-center justify-evenly mt-32 w-full" container>
        <Grid
          className="mb-auto vertical_progress flex-col"
          item
          md={2}
          sm={2}
          xs={12}
          lg={2}
          xl={2}
        >
          <Typography variant="h6">Your progress</Typography>

          <div className="flex flex-row mt-5" style={{}}>
            <VerticalProgress
              variant="determinate"
              //   className="vertical_progress"
              //   o
              sx={{
                width: 4,
                height: 180,
                "& span.MuiLinearProgress-bar": {
                  borderRadius: "2px",
                  backgroundColor: "#0755DB",
                  transform: `translateY(-${100 - progress}%) !important`,
                },
              }}
              value={100 - progress}
            />
            <div className="flex flex-col mr-5 pr-4">
              {[
                { v: 25, l: "Introduction" },
                { v: 50, l: "Eligibility" },
                { v: 75, l: "Coverage" },
                { v: 100, l: "Contact" },
              ].map((v) => (
                <Typography
                  key={v.v}
                  className="ml-5 mt-2"
                  style={{
                    height: "25%",
                    color: v.v <= progress ? "black" : "#626873",
                  }}
                >
                  {v.l}
                </Typography>
              ))}
            </div>
          </div>
        </Grid>
        {/* <Grid className="gridmid" item md={0} sm={1} xs={1} lg={1} xl={1} /> */}

        <Grid item md={8} sm={10} xs={10} lg={5} xl={5}>
          <div className="card_back relative rounded-3xl -z-10" style={{}}>
            <Image
              src={obj[progress || ""]}
              alt=""
              style={{ height: "100px" }}
              className="absolute bottom-10 right-12"
            />
          </div>
          <Card className="rounded-3xl p-8">
            {/* // first step */}
            {progress == 25 && !dobShow && (
              <RadioStep
                head="INTRODUCTION"
                first={first}
                setFirst={setFirst}
                radios={["Myself", "Loved one"] as any}
                title="Are you looking for yourself or a loved one?"
              />
            )}

            {dobShow == "dob" && progress <= 25 && (
              <>
                <p className="text-xs text-gray-700 tracking-wide">
                  {" "}
                  INTRODUCTION
                </p>
                <h1 className="mt-3"> What is your date of birth?</h1>
                <Datetimestep handleChange={() => ""} />
              </>
            )}

            {progress == 50 && !(dobShow == "benefits") && (
              <RadioStep
                head="ELIGIBILITY"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Are you already enrolled in Original Medicare (Parts A&B)?"
              />
            )}
            {progress == 50 && dobShow == "benefits" && (
              <RadioStep
                head="ELIGIBILITY"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Are you eligible for Medicare benefits?"
              />
            )}
            {progress == 75 && !/(coverage|coverage2)/.test(dobShow) && (
              <RadioStep
                head="COVERAGE"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Are you currently covered under Tricares?"
                note="Tricare provides civilian health benefits for U.S. Armed Forces military personnel, military retirees, and their dependents."
              />
            )}
            {progress == 75 && dobShow == "coverage" && (
              <RadioStep
                head="COVERAGE"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Do you currently have any additional insurance coverage, other than your Medicare red, white, and blue card?"
              />
            )}

            {progress == 75 && dobShow == "coverage2" && (
              <RadioStep
                head="COVERAGE"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Did you enroll in this coverage through a past employer, union, Tricare, or Medicaid?"
              />
            )}

            {progress == 100 && !dobShow && (
              <AskName
                head="CONTACT"
                first={first}
                setFirst={setFirst}
                alert="This will help us know who we’re speaking to when we call."
                dobShow={dobShow}
                radios={["Yes", "No"]}
                title="What is your name?"
              />
            )}

            {progress == 100 && dobShow == "lovedcontact" && (
              <AskName
                head="CONTACT"
                first={first}
                setFirst={setFirst}
                alert="This will help us know who we’re speaking about when we call."
                dobShow={dobShow}
                radios={["Yes", "No"]}
                title="What is your loved one’s name?"
              />
            )}

            {progress == 100 && dobShow == "phone" && (
              <AskPhone
                head="CONTACT"
                first={first}
                setFirst={setFirst}
                dobShow={dobShow}
                title="What is your loved one’s name?"
              />
            )}

            <div className="flex justify-between items-center relative h-10 border-1 mt-10">
              {(progress > 25 || dobShow) && (
                <IconButton
                  onClick={() => {
                    setDobShow("");
                    setProgress((p) => (p > 25 ? p - 25 : 25));
                  }}
                  style={{ border: "1px solid lightgray" }}
                  className="p-4 hover:bg-gray-300 relative"
                >
                  <ArrowBackIcon />
                </IconButton>
              )}
              <Button
                disableRipple
                disableTouchRipple
                className="absolute right-0 continue_btn text-white"
                onClick={() => {
                  if (progress === 75 && dobShow == "coverage2") {
                    console.log("sdsdsd");
                    setProgress((p: number) => p + 25);
                  } else if (
                    (progress === 25 && !dobShow) ||
                    (progress === 50 && !(dobShow == "benefits")) ||
                    (progress === 75 &&
                      p == 50 &&
                      !/(coverage|coverage2|benefits)/.test(dobShow)) ||
                    (progress === 100 &&
                      !/(lovedcontact|contact|phone)/.test(dobShow))
                  ) {
                    console.log("ifff----------->", dobShow);
                    setDobShow(
                      (p) =>
                        (progress === 25 && "dob") ||
                        (progress === 50 && "benefits") ||
                        (progress === 100 &&
                          ((p == "lovedcontact" && "phone") ||
                            (p == "phone" && "phone") ||
                            "lovedcontact")) ||
                        (progress === 75 &&
                          (dobShow == "coverage" ? "coverage2" : "coverage")) ||
                        ""
                    );
                  } else {
                    console.log("elrsese");
                    setDobShow("");
                    setProgress((p: number) => (p == 100 ? 100 : p + 25));
                  }
                }}
              >
                Continue{" "}
                <ArrowForwardIcon
                  className="text-white ml-2"
                  color="secondary"
                />
              </Button>
            </div>
          </Card>
          {progress == "100" && dobShow == "phone" && (
            <Grid
              container
              className="rounded-3xl mt-5 p-5 tracking-wide"
              style={{ backgroundColor: "#F5F7FA", color: "#626873" }}
            >
              This confirms that you have consented to receive marketing phone
              calls and text messages via automatic telephone dialing system or
              by artificial voice and/or prerecorded message from
              representatives or agents of Healthinsurance.com and its sister
              companies Total Insurance Brokers, LLC, Together Health Insurance,
              LLC, HealthPlan Intermediaries Holdings, LLC, or Health Pocket
              d/b/a AgileHealth Insurance Agency, which are all part of the
              Benefytt Technologies, Inc. family of companies at the phone
              number provided above. Message and data rates may apply. I
              understand my consent to receive these communications are not a
              condition of purchasing goods and services.
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Questionarie;
