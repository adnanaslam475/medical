import { Radio } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";

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

function RadioStep({ title, first, head, radios = [], setFirst }) {
  const classes = useStyles();

  return (
    <>
      <p className="text-xs text-gray-700 tracking-wide"> {head}</p>
      <h1>{title}</h1>
      {radios.map((v) => (
        <div
          key={v}
          onClick={() => setFirst(v)}
          className="rounded-full border-gray-500 mt-5 cursor-pointer h-14 flex items-center mb-5 radiotrans"
          style={{
            border: "1px solid lightgray",
            transition: ".5s",
            backgroundColor: first == v ? "#0755DB" : "",
            color: first == v ? "white" : "",
          }}
        >
          <Radio
            className={"p-3 rad text-lg " + classes.smallRadioButton}
            checked={v == first}
          />
          {v}
        </div>
      ))}
    </>
  );
}

export default RadioStep;
