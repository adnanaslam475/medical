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

type Props = {
  title: string;
  head: string;
  values: any;
  handleChange: any;
  options: any;
  name: any;
};
function Currentcoverage({
  title,
  head,
  values,
  handleChange,
  options,
  name,
}: Props) {
  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      <ReusableSelect
        placeholder="select month"
        value={values[name]}
        err={null}
        setErr={null}
        onChange={(value: any) => handleChange(name, value)}
        options={options}
      />
    </>
  );
}

export default Currentcoverage;
