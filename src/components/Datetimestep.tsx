import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import ReactSelect, { components } from "react-select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReusableSelect from "./Select";
import IlusSecond from "../components/second_back.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { colourOptions } from "../utils";

const DropdownIndicator = (props, open) => {
  return (
    <components.DropdownIndicator className="" {...props}>
      {open ? <KeyboardArrowUpIcon className="" /> : <ExpandMoreIcon />}
    </components.DropdownIndicator>
  );
};

type Props = { handleChange: any };

function Datetimestep({ handleChange }: Props) {
  const [open, setOPen] = useState(false);

  return (
    <div style={{}} className="flex items-center flex-row datetime mt-5">
      <ReusableSelect
        placeholder="select month"
        value=""
        handleChange={() => ""}
        options={colourOptions}
      />
      <ReusableSelect
        placeholder="select day"
        handleChange={() => ""}
        value=""
        options={Array(31)
          .fill()
          .map((_, i) => ({ value: i + 1, label: i + 1 }))}
      />

      <TextField
        className="year"
        size="medium"
        placeholder="YYYY"
        // sx={{ border: "1px solid gray !important" }}
        style={{
        //   height: "65px",
        //   border: "1px solid gray !important",
          borderRadius: "1rem",
          // border: '1px solid red'
        }}
        onChange={handleChange}
      />
    </div>
  );
}

export default Datetimestep;
