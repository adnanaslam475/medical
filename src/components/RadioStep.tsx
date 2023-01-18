import React from "react";
import { Radio } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    smallRadioButton: {
      "& svg": {
        width: "1.5em",
        height: "1.5em",
      },
    },
  })
);

// head="ELIGIBILITY"
// radios={["Yes", "No"] as any}
// name="eligible1"
// values={values}
// handleChange={handleChange}
// title
type Props = {
  title: string;
  head: string;
  name: string;
  note: any;
  values: any;
  radios: [];
  handleChange: (name: string, value: any) => void;
};

function RadioStep({
  title,
  name,
  head,
  note,
  radios = [],
  handleChange,
  values,
}: Props) {
  const classes = useStyles();

  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      {note ? <p className="mt-3 text-gray-600">{note}</p> : null}
      {radios.map((v) => (
        <div
          key={v}
          onClick={() => handleChange(name, v)}
          className="rounded-full border-gray-500 mt-5 cursor-pointer h-14 flex items-center mb-5 radiotrans"
          style={{
            border: "1px solid lightgray",
            transition: ".5s",
            backgroundColor: values[name] == v ? "#0755DB" : "",
            color: values[name] == v ? "white" : "",
          }}
        >
          <Radio
            className={"p-3 rad text-lg " + classes.smallRadioButton}
            checked={values[name] == v}
          />
          {v}
        </div>
      ))}
    </>
  );
}

export default RadioStep;
