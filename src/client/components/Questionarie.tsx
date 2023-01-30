import React, { useEffect, useRef, useState } from "react";
import VerticalProgress from "@mui/material/LinearProgress";
import HorizontalProgress from "@mui/material/LinearProgress";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { Card, Grid, IconButton, Typography, Button } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
// import { object, string } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import IlusFirst from "../components/first_back.svg";
import IlusSecond from "../components/second_back.svg";
import IlusThird from "../components/third_back.svg";
import IlusFinal from "../components/final.svg";
import Datetimestep from "./Datetimestep";
import RadioStep from "./RadioStep";
import Header from "./Header";
import AskName from "./AskName";
import AskPhone from "./AskPhone";
import { valuesState } from "./types";
import CurrentCoverage, { current } from "./Currentcoverage";
import Thankyou from "./Thankyou";
import axios from "axios";
import { steps } from "../utils";

const obj: any = {
  25: IlusFirst,
  50: IlusSecond,
  75: IlusThird,
  100: IlusFinal,
};

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

// const b = { 25: IlusFirst, 50: IlusSecond, 75: IlusThird, 100: IlusFinal };

function Questionarie() {
  const [dobShow, setDobShow] = useState<string>("");
  // const { getValues } = useFormContext();    register('select', {
  const [values, setValues] = useState<valuesState | any>({
    intro: "",
    month: "",
    day: "",
    year: "",
    eligible1: "", //Original Medicare
    eligible2: "", //Medicare benefits
    coverage1: "", // tricare
    coverage2: "", //Medicare red
    coverage3: "", //Medicaid?
    // Who did you enroll through for your current coverage?
    coverage4: "", // current coverage,
    // step 4
    firstName: "",
    lastName: "",
    lovedFirstName: "",
    lovedLastName: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
  });

  const [progress, setProgress] = useState<number>(25);
  const [thankyou, setThankYou] = useState(false);
  // const [error, setError] = useState<boolean>("");
  const ref = useRef(null);
  // const { register, formState, handleSubmit, setError, reset } = useForm({
  //   resolver: yupResolver(schema),
  //   // values: {},
  //   // validationSchema: schema,
  // });

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
    // setError(null);
  };

  const submit = async (e: any) => {
    e.preventDefault();
    try {
      // quote_for --> first
      // dob --> first
      // tricare_coverage:'' --> three
      const obj = { quote_for: "", dob: "", tricare_coverage: "" };
      const res = await axios.post(
        "https://api.quantumdigitalmedia.com/post.do",
        obj
      );
      setThankYou(true);
      console.log("re", res.data);
    } catch (error) {
      console.log("eror", error);
    }
  };

  const onBack = () => {
    setDobShow("");
    setProgress((p) => (p > 25 ? p - 25 : 25));
  };

  const onContinue = () => {
    if (
      (progress === 25 && !dobShow) ||
      (progress === 50 && !(dobShow == "benefits")) ||
      (progress === 75 && !/(coverage2|benefits)/.test(dobShow)) ||
      (progress === 100 && !/(email|coverage2)/.test(dobShow))
    ) {
      setDobShow(
        (p) =>
          (progress === 25 && "dob") ||
          (progress === 50 && "benefits") ||
          (progress === 100 &&
            ((p == "lovedcontact" && "phone") ||
              (p == "phone" && "address") ||
              (p == "address" && "zip") ||
              (p == "zip" && "email") ||
              (p == "email" && "email") ||
              "lovedcontact")) ||
          (progress === 75 &&
            (dobShow == "coverage" ? "coverage2" : "coverage")) ||
          ""
      );
    } else {
      setDobShow((p) => (p == "phone" ? "phone" : ""));
      setProgress((p: number) => (p == 100 ? 100 : p + 25));
    }
  };

  const last: object | any = {
    address: "Enter address",
    phone: "Enter phone number",
    email: "Enter email",
    zip: "Enter zip",
  };

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
              {steps.map((v) => (
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

        {thankyou ? (
          <Grid item md={8} sm={12} xs={12} lg={8} xl={4}>
            <Thankyou />
          </Grid>
        ) : (
          <Grid item md={8} sm={10} xs={10} lg={5} xl={5}>
            <form onSubmit={submit}>
              <div
                className="card_back relative rounded-3xl -z-10"
                // style={{}}
              >
                <Image
                  src={obj[progress || ""] as any}
                  alt=""
                  style={{ height: "100px" }}
                  className="absolute bottom-10 right-12"
                />
              </div>
              <Card className="rounded-3xl p-8">
                {/* // First step */}
                {progress == 25 && !dobShow && (
                  <RadioStep
                    head="INTRODUCTION"
                    values={values}
                    name="intro"
                    // note={null}
                    onBack={onBack}
                    dobShow={dobShow}
                    progress={progress}
                    onContinue={onContinue}
                    handleChange={handleChange}
                    radios={["Yes", "No"] as any}
                    title="Are you looking for yourself or a loved one?"
                  />
                )}

                {dobShow == "dob" && progress <= 25 && (
                  <>
                    <p className="text-xs text-gray-700 tracking-widest">
                      {" "}
                      INTRODUCTION
                    </p>
                    <h1 className="mt-3"> What is your date of birth?</h1>
                    <Datetimestep
                      dobShow={dobShow}
                      values={values}
                      onBack={onBack}
                      onContinue={onContinue}
                      progress={progress}
                      handleChange={handleChange}
                    />
                  </>
                )}

                {progress == 50 && !(dobShow == "benefits") && (
                  <RadioStep
                    head="ELIGIBILITY"
                    ref={ref}
                    radios={["Yes", "No"] as any}
                    name="eligible1"
                    note={null}
                    onContinue={onContinue}
                    dobShow={dobShow}
                    onBack={onBack}
                    progress={progress}
                    values={values}
                    handleChange={handleChange}
                    title="Are you already enrolled in Original Medicare (Parts A&B)?"
                  />
                )}

                {progress == 50 && dobShow == "benefits" && (
                  <RadioStep
                    head="ELIGIBILITY"
                    name="eligible2"
                    note={null}
                    dobShow={dobShow}
                    onContinue={onContinue}
                    onBack={onBack}
                    progress={progress}
                    values={values}
                    radios={["Yes", "No"] as any}
                    handleChange={handleChange}
                    title="Are you eligible for Medicare benefits?"
                  />
                )}

                {progress == 75 && !/(coverage|coverage2)/.test(dobShow) && (
                  <RadioStep
                    onBack={onBack}
                    onContinue={onContinue}
                    head="COVERAGE"
                    radios={["Yes", "No"] as any}
                    name="coverage1"
                    dobShow={dobShow}
                    progress={progress}
                    values={values}
                    handleChange={handleChange}
                    title="Are you currently covered under Tricares?"
                    note="Tricare provides civilian health benefits for U.S. Armed Forces military personnel, military retirees, and their dependents."
                  />
                )}

                {progress == 75 && dobShow == "coverage" && (
                  <RadioStep
                    head="COVERAGE"
                    name="coverage2"
                    onContinue={onContinue}
                    note={null}
                    values={values}
                    dobShow={dobShow}
                    onBack={onBack}
                    progress={progress}
                    radios={["Yes", "No"] as any}
                    handleChange={handleChange}
                    title="Do you currently have any additional insurance coverage, other than your Medicare red, white, and blue card?"
                  />
                )}

                {progress == 75 && dobShow == "coverage2" && (
                  <RadioStep
                    dobShow={dobShow}
                    head="COVERAGE"
                    name="coverage3"
                    values={values}
                    note={null}
                    progress={progress}
                    onBack={onBack}
                    onContinue={onContinue}
                    handleChange={handleChange}
                    radios={["Yes", "No"] as any}
                    title="Did you enroll in this coverage through a past employer, union, Tricare, or Medicaid?"
                  />
                )}

                {progress == 75 && dobShow == "currentcoverage" && (
                  <CurrentCoverage
                    head="COVERAGE"
                    name="coverage4"
                    values={values}
                    handleChange={handleChange}
                    options={current}
                    title="Who did you enroll through for your current coverage?"
                  />
                )}

                {progress == 100 && !dobShow && (
                  <AskName
                    head="CONTACT"
                    dobShow={dobShow}
                    onBack={onBack}
                    onContinue={onContinue}
                    progress={progress}
                    values={values}
                    handleChange={handleChange}
                    alert="This will help us know who we’re speaking to when we call."
                    radios={["Yes", "No"] as any}
                    title="What is your name?"
                  />
                )}

                {progress == 100 && dobShow == "lovedcontact" && (
                  <AskName
                    head="CONTACT"
                    values={values}
                    onBack={onBack}
                    progress={progress}
                    onContinue={onContinue}
                    handleChange={handleChange}
                    alert="This will help us know who we’re speaking about when we call."
                    dobShow={dobShow}
                    radios={["Yes", "No"] as any}
                    title="What is your loved one’s name?"
                  />
                )}

                {progress == 100 &&
                  /(address|phone|zip|email)/.test(dobShow) && (
                    <AskPhone
                      head="CONTACT"
                      handleChange={handleChange}
                      dobShow={dobShow}
                      onBack={onBack}
                      progress={progress}
                      placeholder={last[dobShow]}
                      onContinue={onContinue}
                      value={values[dobShow || ""] as any}
                      title={
                        (dobShow == "address" &&
                          "What is your current home address?") ||
                        (dobShow == "email" &&
                          "What is your current email address?") ||
                        (dobShow == "zip" && "What is your zip code?") ||
                        "What is your phone number?"
                      }
                      alert={
                        (dobShow == "address" &&
                          "We can mail you valuable Medicare shopping resources.") ||
                        (dobShow == "email" &&
                          "We can send you valuable enrollment reminders & plan details.") ||
                        (dobShow == "zip" &&
                          "Medicare plan availability is based on zip code. Zip code is the minimum location information we need to help you.") ||
                        "A quick discussion will help us find your ideal coverage."
                      }
                    />
                  )}
              </Card>

              {progress == 100 && /(phone|address|email)/.test(dobShow) && (
                <Grid
                  container
                  className="rounded-3xl mt-5 p-5 tracking-wide"
                  style={{ backgroundColor: "#F5F7FA", color: "#626873" }}
                >
                  {(dobShow == "email" &&
                    "By submitting this form, I consent to allow TogetherHealth Insurance, LLC, Health Plan Intermediaries Holdings, LLC, Total Insurance Brokers, LLC, or HealthPocket d/b/a AgileHealthInsurance Agency, which are all part of the Benefytt Technologies, Inc. family of companies, to contact me by email about Medicare Advantage, Medicare Supplement Insurance and Prescription Drug plans using the contact information provided.") ||
                    (dobShow == "address" &&
                      "By submitting this form, I consent to allow TogetherHealth Insurance, LLC, Health Plan Intermediaries Holdings, LLC, Total Insurance Brokers, LLC, or HealthPocket d/b/a AgileHealthInsurance Agency, which are all part of the Benefytt Technologies, Inc. family of companies, to send me information about Medicare Advantage, Medicare Supplement Insurance and Prescription Drug plans using the contact information provided.") ||
                    "This confirms that you have consented to receive marketing phone calls and text messages via automatic telephone dialing system or by artificial voice and/or prerecorded message from representatives or agents of Healthinsurance.com and its sister companies Total Insurance Brokers, LLC, Together Health Insurance, LLC, HealthPlan Intermediaries Holdings, LLC, or Health Pocket d/b/a AgileHealth Insurance Agency, which are all part of the Benefytt Technologies, Inc. family of companies at the phone number provided above. Message and data rates may apply. I understand my consent to receive these communications are not a condition of purchasing goods and services."}
                </Grid>
              )}
            </form>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Questionarie;

{
  /* <div className="flex justify-between items-center relative h-10 border-1 mt-10">
  {(progress > 25 || dobShow) && (
    <IconButton
      onClick={() => {
        setDobShow("");
        setError(false);
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
    ref={ref}
    className="absolute right-0 continue_btn text-white"
    onClick={() => {
      // if (correct()) {
      if (
        (progress === 25 && !dobShow) ||
        (progress === 50 && !(dobShow == "benefits")) ||
        (progress === 75 && !/(coverage2|benefits)/.test(dobShow)) ||
        (progress === 100 && !/(email|coverage2)/.test(dobShow))
      ) {
        setDobShow(
          (p) =>
            (progress === 25 && "dob") ||
            (progress === 50 && "benefits") ||
            (progress === 100 &&
              ((p == "lovedcontact" && "phone") ||
                (p == "phone" && "address") ||
                (p == "address" && "zip") ||
                (p == "zip" && "email") ||
                (p == "email" && "email") ||
                "lovedcontact")) ||
            (progress === 75 &&
              (dobShow == "coverage" ? "coverage2" : "coverage")) ||
            ""
        );
      } else {
        setDobShow((p) => (p == "phone" ? "phone" : ""));
        setProgress((p: number) => (p == 100 ? 100 : p + 25));
      }
      // }
    }}
  >
    Continue <ArrowForwardIcon className="text-white ml-2" color="secondary" />
  </Button>
</div>; */
}
