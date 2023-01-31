import React, { useState } from "react";
import Image from "next/image";
import { Alert, Button, Grid, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Sheild from "./sheild.svg";
import { ErrorDiv } from "./RadioStep";

type Props = {
  title: string;
  head: string;
  dobShow: string;
  alert: string;
  values: any;
  radios: [];
  onBack: any;
  onContinue: any;
  progress: any;
  handleChange: (name: string, value: any) => void;
};
function AskName({
  title,
  head,
  dobShow,
  alert,
  values,
  handleChange,
  onBack,
  onContinue,
  progress,
}: Props) {
  const [err, setErr] = useState("");

  const a: any = !dobShow
    ? [
        { p: "First name", i: "firstName", s: "mr-2" },
        { p: "Last name", i: "lastName", s: "ml-2" },
      ]
    : [
        { p: "First name", i: "lovedFirstName", s: "mr-2" },
        { p: "Last name", i: "lovedLastName", s: "ml-2" },
      ];

  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      <Grid className="mt-3" container>
        {a.map((v: any) => (
          <Grid xs={12} item md={6} key={v.s} xl={6} lg={6} sm={6}>
            <TextField
              className={`year ${v.s} ${err == v.p ? "fnone" : ""}`}
              size="medium"
              placeholder={"Enter " + v.p}
              InputLabelProps={{
                style: {},
              }}
              value={values[v.i]}
              InputProps={{
                style: {
                  height: "62px inherit",
                  ...(err == v.p && {
                    border: `1px solid #DE2654`,
                  }),
                  //   ...(!focused && { top: `${labelOffset}px` }),
                },
              }}
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
              onChange={({ target: { value } }) => {
                setErr("");
                handleChange(v.i, value);
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Alert
        severity="error"
        className="items-center w-full mt-4 rounded-2xl h-16 redalert"
        icon={<Image src={Sheild} alt="" className="" />}
      >
        {alert}
      </Alert>{" "}
      {err && <ErrorDiv classnames="mt-3" a={err} />}
      <div className="flex justify-between items-center relative h-10 border-1 mt-10">
        {(progress > 25 || dobShow) && (
          <IconButton
            onClick={onBack}
            style={{ border: "1px solid lightgray" }}
            className="p-4 hover:bg-gray-300 relative"
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Button
          disableRipple
          disableTouchRipple
          style={{ position: "absolute", right: 0, color: "white" }}
          className="absolute right-0 continue_btn"
          // className="absolute right-0 continue_btn text-white"
          onClick={() => {
            for (let key in values) {
              if (!values[key] && a.map((v: any) => v.i).includes(key)) {
                return setErr(a.find((v: any) => v.i == key).p);
              }
            }
            onContinue();
          }}
        >
          Continue{" "}
          <ArrowForwardIcon className="text-white ml-2" color="secondary" />
        </Button>
      </div>
    </>
  );
}

export default AskName;

// {" "}
//         {/* {dobShow == "contact" ? (
//           <TextField
//             className={`year ${v.s}`}
//             size="medium"
//             // value={values[]}
//             placeholder={v.p}
//             InputLabelProps={{
//               style: {},
//             }}
//             InputProps={{
//               style: {
//                 height: "62px",
//                 //   ...(!focused && { top: `${labelOffset}px` }),
//               },
//             }}
//             style={{
//               borderRadius: "1rem",
//               width: "100%",
//             }}
//             onChange={handleChange}
//           />
//         ) : ( */}
