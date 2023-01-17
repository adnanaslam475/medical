import React, { useState } from "react";
import {
  FormControl,
  Grid,
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

// const DropdownIndicator = (props, open) => {
//   return (
//     <components.DropdownIndicator className="" {...props}>
//       {open ? <KeyboardArrowUpIcon className="" /> : <ExpandMoreIcon />}
//     </components.DropdownIndicator>
//   );
// };

type Props = { handleChange: any };

function Datetimestep({ handleChange }: Props) {
  const [open, setOPen] = useState(false);

  return (
    <Grid
      // spacing={1}
      // rowSpacing={3}
      // columnSpacing={14}
      container
      style={{}}
      className="flex items-center justify-between flex-row datetime mt-5"
    >
      <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
        <ReusableSelect
          placeholder="select month"
          value=""
          handleChange={() => ""}
          options={colourOptions}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
        <ReusableSelect
          placeholder="select day"
          handleChange={() => ""}
          value=""
          options={Array(31)
            .fill()
            .map((_, i) => ({ value: i + 1, label: i + 1 }))}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
        <TextField
          className="year"
          size="medium"
          placeholder="YYYY"
          InputProps={{
            style: {
              height: "60px",
              width: "100% auto",
            },
          }}
          // sx={{ border: "1px solid gray !important" }}
          style={{
            borderRadius: "1rem",
          }}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

export default Datetimestep;
