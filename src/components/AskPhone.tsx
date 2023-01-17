import React from "react";
import { Alert, Grid, TextField } from "@mui/material";
import Sheild from "./sheild.svg";
import Image from "next/image";

function AskPhone({ title, first, head, handleChange, setFirst }) {
  return (
    <>
      <p className="text-xs text-gray-500 tracking-wide"> {head}</p>
      <h1 className="mt-3">{title}</h1>

      <TextField
        className=""
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

      <Alert
        severity="error"
        className="items-center w-full mt-4 rounded-2xl h-16 text-black redalert"
        icon={<Image src={Sheild} alt="" className="" />}
      >
        A quick discussion will help us find your ideal coverage.
      </Alert>
    </>
  );
}

export default AskPhone;
