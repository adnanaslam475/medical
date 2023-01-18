import React from "react";
import { Alert, Grid, TextField } from "@mui/material";
import Sheild from "./sheild.svg";
import Image from "next/image";

function AskPhone({ alert, title, value, head, dobShow, handleChange }) {
  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>

      <TextField
        className="w-full mt-5 year"
        size="medium"
        value={value}
        placeholder="Enter Phone number"
        InputLabelProps={{
          style: {},
        }}
        InputProps={{
          style: {
            height: "62px",
            borderRadius: "1rem",
            //   ...(!focused && { top: `${labelOffset}px` }),
          },
        }}
        style={{
          borderRadius: "1rem",
          width: "100%",
        }}
        onChange={({ target: { value } }) => handleChange(dobShow, value)}
      />

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

export default AskPhone;
