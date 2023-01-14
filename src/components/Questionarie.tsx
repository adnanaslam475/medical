import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import LinearPProgress from "@mui/material/LinearProgress";
import {
  Card,
  Grid,
  IconButton,
  Typography,
  Button,
  Checkbox,
  Radio,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../components/aef-logo.svg";
import Avatar from "../components/avatar.png";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import IlusFirst from "../components/first_back.svg";
import IlusSecond from "../components/second_back.svg";
import IlusThird from "../components/third_back.svg";
import IlusFinal from "../components/final.svg";

import Image from "next/image";
import Datetimestep from "./Datetimestep";
import { createStyles, makeStyles } from "@mui/styles";
import RadioStep from "./RadioStep";

const obj = { 25: IlusFirst, 50: IlusSecond, 75: IlusThird, 100: IlusFinal };
// const objs = { 25: 1, 50: 2, 75: 3, 100: 4 };
const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "1.5em",
        height: "1.5em",
      },
    },
  })
);
function Questionarie() {
//   const classes = useStyles();
  const [progress, setProgress] = useState(25);
  const [first, setFirst] = useState("");

  //   const handleChange = () => {};

  return (
    <div style={{ height: "50vh" }}>
      <div
        className="h-35 flex justify-between"
        style={{ margin: "10px 10% 10px 10%" }}
      >
        <Image alt="" src={Logo} className="" />
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-3">
            <p>Speak to an advisor now</p>
            <h4
              className="text-right font-bold text-xl"
              style={{ color: "#0755DB" }}
            >
              <PhoneInTalkIcon />
              (800) 7458 232
            </h4>
          </div>
          <Image alt="" src={Avatar} className="rounded-full" />
        </div>
      </div>
      <div className="horizontal_progress">
        <LinearPProgress variant="determinate" value={progress} />
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
      <Grid className="flex items-center justify-center mt-32" container>
        <Grid
          item
          md={2}
          className="mb-auto vertical_progress flex-col"
          sm={2}
          xs={2}
          lg={2}
          xl={2}
        >
          <Typography variant="h6">Your progress</Typography>

          <div className="flex flex-row mt-5" style={{}}>
            <LinearProgress
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
        <Grid className="gridmid" item md={1} sm={1} xs={1} lg={1} xl={1} />

        <Grid
          style={{ maxWidth: "70%" }}
          item
          md={10}
          sm={12}
          xs={12}
          lg={5}
          xl={5}
        >
          <div className="card_back relative rounded-3xl -z-10" style={{}}>
            <Image
              src={obj[progress]}
              alt=""
              style={{ height: "100px" }}
              className="absolute bottom-10 right-12"
            />
          </div>
          <Card className="rounded-3xl p-8">
            {progress == 25 && (
              <RadioStep
                head="ELIGIBILITY"
                first={first}
                setFirst={setFirst}
                radios={["Myself", "Loved one"]}
                title="Are you already enrolled in Original Medicare (Parts A&Bs)?"
              />
            )}

            {progress == 50 && (
              <>
                <p className="text-xs text-gray-700 tracking-wide">
                  {" "}
                  INTRODUCTION
                </p>
                <h1> What is your date of birth?</h1>
                <Datetimestep handleChange={() => ""} />
              </>
            )}

            {progress == 75 && (
              <RadioStep
                head="ELIGIBILITY"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title="Are you already enrolled in Original Medicare (Parts A&Bs)?"
              />
            )}
            {progress == 100 && (
              <RadioStep
                head="ELIGIBILITY"
                first={first}
                setFirst={setFirst}
                radios={["Yes", "No"]}
                title=" Are you currently covered under Tricare? Tricare provides
                civilian health benefits for U.S. Armed Forces military
                 personnel, military retirees, and their dependents."
              />
            )}

            <div className="flex justify-between items-center relative h-10 border-1 mt-10">
              {progress > 25 && (
                <IconButton
                  onClick={() => setProgress((p) => p - 25)}
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
                onClick={() => setProgress((p) => p + 25)}
              >
                Continue{" "}
                <ArrowForwardIcon
                  className="text-white ml-2"
                  color="secondary"
                />
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Questionarie;
