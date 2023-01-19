import React, { useState } from "react";
import Image from "next/image";
import { Alert, Button, Grid, IconButton, TextField } from "@mui/material";
import Sheild from "./sheild.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ErrorDiv } from "./RadioStep";

type Props = {
  title: string;
  head: string;
  dobShow: string;
  alert: string;
  value: any;
  placeholder: any;
  radios: [];
  progress: number;
  handleChange: (name: string, value: any) => void;
  onBack: () => void;
  onContinue: () => void;
};

function AskPhone({
  alert,
  title,
  value,
  head,
  dobShow,
  onBack,
  onContinue,
  progress,
  handleChange,
  placeholder,
}: Props) {
  const [err, setErr] = useState(false);

  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>

      <TextField
        className={`w-full mt-5 year ${err ? "fnone" : ""}`}
        size="medium"
        type={dobShow == "phone" ? "number" : "text"}
        value={value}
        placeholder={placeholder}
        InputLabelProps={{
          style: {},
        }}
        InputProps={{
          style: {
            height: "62px",
            borderRadius: "1rem",
            ...(err && {
              border: `1px solid #DE2654`,
            }),
          },
        }}
        style={{
          borderRadius: "1rem",
          width: "100%",
        }}
        onChange={({ target: { value } }) => {
          setErr(false);
          handleChange(dobShow, value);
        }}
      />

      <Alert
        severity="error"
        className="items-center w-full mt-4 rounded-2xl h-16 text-black redalert"
        icon={<Image src={Sheild} alt="" className="" />}
      >
        {alert}
      </Alert>
      {err && <ErrorDiv classnames="mt-3" a="This" />}
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
          className="absolute right-0 continue_btn text-white"
          onClick={() => (value ? onContinue() : setErr(true))}
        >
          Continue{" "}
          <ArrowForwardIcon className="text-white ml-2" color="secondary" />
        </Button>
      </div>
    </>
  );
}

export default AskPhone;
