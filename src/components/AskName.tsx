import React from "react";
import { Alert, Grid, TextField } from "@mui/material";
import Sheild from "./sheild.svg";
import Image from "next/image";

function AskName({
  title,
  first,
  head,
  dobShow = false,
  note,
  radios = [],
  alert,
  handleChange,
  setFirst,
}) {
  const a = dobShow
    ? [
        { p: "Enter first name", s: "mr-2" },
        { p: "Enter last name", s: "ml-2" },
      ]
    : [
        { p: "First name", s: "mr-2" },
        { p: "Last name", s: "ml-2" },
      ];
  return (
    <>
      <p className="text-xs text-gray-500 tracking-wide"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      <Grid className="mt-3" container>
        {" "}
        {dobShow == "contact" ? (
          <TextField
            className={`year ${v.s}`}
            size="medium"
            placeholder={v.p}
            InputLabelProps={{
              style: {},
            }}
            InputProps={{
              style: {
                height: "62px",
                //   ...(!focused && { top: `${labelOffset}px` }),
              },
            }}
            style={{
              borderRadius: "1rem",
              width: "100%",
              // minHeight: "70px",
            }}
            onChange={handleChange}
          />
        ) : (
          a.map((v) => (
            <Grid xs={12} item md={6} key={v.s} xl={6} lg={6} sm={6}>
              <TextField
                className={`year ${v.s}`}
                size="medium"
                placeholder={v.p}
                InputLabelProps={{
                  style: {},
                }}
                InputProps={{
                  style: {
                    height: "62px",
                    //   ...(!focused && { top: `${labelOffset}px` }),
                  },
                }}
                style={{
                  borderRadius: "1rem",
                  width: "100%",
                  // minHeight: "70px",
                }}
                onChange={handleChange}
              />
            </Grid>
          ))
        )}
      </Grid>
      <Alert
        severity="error"
        className="items-center w-full mt-4 rounded-2xl h-16 text-black redalert"
        icon={<Image src={Sheild} alt="" className="" />}
      >
        {alert}
      </Alert>
    </>
  );
}

export default AskName;
