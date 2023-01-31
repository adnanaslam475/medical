import React, { useState } from "react";
import { Button, IconButton, Radio } from "@mui/material";
// import { createStyles, makeStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ErrorIcon from "@mui/icons-material/Error";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     smallRadioButton: {
//       "& svg": {
//         width: "1.5em",
//         height: "1.5em",
//         // color: "white",
//       },
//     },
//   })
// );

type EProps = { a: string; classnames?: string };
export const ErrorDiv = ({ a, classnames }: EProps) => (
  <div className={`flex items-center ${classnames}`}>
    <ErrorIcon style={{ color: "red" }} />
    <p className="text-red-600 ml-2">{a} is required to continue.</p>
  </div>
);

type Props = {
  title: string;
  head: string;
  name: string;
  note?: any;
  values: any;
  ref?: any;
  radios: [];
  handleChange: (name: string, value: any) => void;
  onBack: () => void;
  onContinue: () => void;
  dobShow: string;
  progress: number;
};

function RadioStep({
  title,
  name,
  head,
  note,
  radios = [],
  handleChange,
  values,
  dobShow,
  progress,
  onBack,
  onContinue,
}: Props) {
  const [err, setErr] = useState(false);

  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      {note ? <p className="mt-3 text-gray-600">{note}</p> : null}
      {radios.map((v) => (
        <div
          key={v}
          onClick={() => {
            handleChange(name, v);
            setErr(false);
          }}
          // .border-gray-500
          className="rounded-full mt-5 cursor-pointer h-14 flex items-center mb-5 radiotrans"
          style={{
            border: `1px solid ${err ? "red" : "lightgray"}`,
            transition: ".5s",
            backgroundColor: values[name] == v ? "#0755DB" : "",
            color: values[name] == v ? "white" : "",
          }}
        >
          <Radio
            // sx={{
            //   "& svg": {
            //     width: "2.5em !important",
            //     height: "2.5em !important",
            //   },
            // }}
            className={
              "p-3 rad text-lg " +
              (values[name] ? " chk" : "") +
              (err ? " error sml" : "")
            }
            style={{ color: err ? "red" : "" }}
            checked={values[name] == v}
          />
          {v}
        </div>
      ))}
      {err && <ErrorDiv a="This" />}
      <div className="flex justify-between items-center relative h-10 border-1 mt-10">
        {(progress > 25 || dobShow) && (
          <IconButton
            onClick={() => {
              onBack();
              setErr(false);
            }}
            style={{ border: "1px solid lightgray" }}
            className="p-4 hover:bg-gray-300 relative"
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Button
          disableRipple
          disableTouchRipple
          style={{ position: "absolute", right: 0, color: "white" }}
          className="absolute right-0 continue_btn"
          onClick={() =>
            values[name] || /(eligible1|coverage2)/.test(name)
              ? onContinue()
              : setErr(true)
          }
        >
          Continue{" "}
          <ArrowForwardIcon className="text-white ml-2" color="secondary" />
        </Button>
      </div>
    </>
  );
}

export default RadioStep;
