import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid, IconButton, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReusableSelect from "./Select";
import { colourOptions } from "../utils";
import { ErrorDiv } from "./RadioStep";

type Props = {
  onBack: () => void;
  onContinue: () => void;
  handleChange: (name: string, value: any) => void;
  values: any;
  progress: number;
  dobShow: string;
};

function Datetimestep({
  handleChange,
  onBack,
  onContinue,
  values,
  progress,
  dobShow,
}: Props) {
  const [err, setErr] = useState<any>("");

  console.log("Datetimestep", values);
  return (
    <>
      <Grid
        container
        style={{}}
        className="flex items-center justify-between flex-row datetime mt-5"
      >
        <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
          <ReusableSelect
            placeholder="Select month"
            value={values["month"]}
            setErr={setErr}
            err={err == "Month"}
            onChange={(value: any) => {
              setErr("");
              handleChange("month", value.value);
            }}
            options={colourOptions}
          />
        </Grid>
        <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
          <ReusableSelect
            placeholder="Select day"
            value={values["day"]}
            err={err == "Day"}
            setErr={setErr}
            onChange={(value: any) => {
              setErr("");
              handleChange("day", value.value);
            }}
            options={Array(31)
              .fill(1)
              .map((_, i) => ({ value: i + 1, label: i + 1 }))}
          />
        </Grid>
        <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
          <TextField
            className={`year ${err == "Year" ? "fnone" : ""}`}
            size="medium"
            placeholder="YYYY"
            value={values["year"]}
            type="number"
            InputProps={{
              style: {
                height: "60px",
                width: "100% auto",
                ...(err == "Year" && {
                  border: `1px solid #DE2654`,
                }),
              },
            }}
            // sx={{ border: `1px solid ${err ? "red" : "lightgray"}` }}
            style={{
              borderRadius: "1rem",
            }}
            onChange={({ target: { value } }) => {
              setErr("");
              handleChange("year", value);
            }}
          />
        </Grid>
      </Grid>
      {err && <ErrorDiv classnames="mt-4" a={err} />}
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
          className={`absolute right-0 continue_btn text-white`}
          onClick={() => {
            if (!values["day"] || !values["month"] || !values["year"]) {
              setErr(
                (!values["month"] && "Month") ||
                  (!values["day"] && "Day") ||
                  (!values["year"] && "Year")
              );
            } else {
              onContinue();
            }
          }}
        >
          Continue{" "}
          <ArrowForwardIcon className="text-white ml-2" color="secondary" />
        </Button>
      </div>
    </>
  );
}

export default Datetimestep;
