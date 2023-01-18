import React, { useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import ReusableSelect from "./Select";
// import ReactSelect, { components } from "react-select";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import IlusSecond from "../components/second_back.svg";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { colourOptions } from "../utils";

type Props = { handleChange: (name: string, value: any) => void; values: any };

function Datetimestep({ handleChange, values }: Props) {
  // const [open, setOPen] = useState(false);

  console.log("Datetimestep", values);
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
          value={values["month"]}
          onChange={(value: any) => handleChange("month", value.value)}
          options={colourOptions}
        />
      </Grid>
      <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
        <ReusableSelect
          placeholder="select day"
          value={values["day"]}
          onChange={(value: any) => handleChange("day", value.value)}
          value={values["day"]}
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
          value={values["year"]}
          type="number"
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
          onChange={({ target: { value } }) => handleChange("year", value)}
        />
      </Grid>
    </Grid>
  );
}

export default Datetimestep;
