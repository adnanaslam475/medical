import React from "react";
// import { Alert, Grid, TextField } from "@mui/material";
import Image from "next/image";
import Sheild from "./sheild.svg";
import ReusableSelect from "./Select";

export const current = [
  { value: "pastemployer", label: "Past Employer" },
  { value: "union", label: "Union" },
  { value: "tricade", label: "Tricade" },
  { value: "medicaid", label: "Medicaid" },
];

function Currentcoverage({ title, head, values, handleChange, options, name }) {
  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      <ReusableSelect
        placeholder="select month"
        value={values[name]}
        onChange={(value) => handleChange(name, value)}
        options={options}
      />
    </>
  );
}

export default Currentcoverage;
