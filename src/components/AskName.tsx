import React from "react";
import { Alert, Grid, TextField } from "@mui/material";
import Sheild from "./sheild.svg";
import Image from "next/image";

type Props = {
  title: string;
  head: string;
  dobShow: string;
  alert: string;
  values: any;
  radios: [];
  handleChange: (name: string, value: any) => void;
};
function AskName({ title, head, dobShow, alert, values, handleChange }: Props) {
  console.log("dobShow", dobShow);
  const a = !dobShow
    ? [
        { p: "Enter first name", i: "firstName", s: "mr-2" },
        { p: "Enter last name", i: "lastName", s: "ml-2" },
      ]
    : [
        { p: "First name", i: "lovedFirstName", s: "mr-2" },
        { p: "Last name", i: "lovedLastName", s: "ml-2" },
      ];
  return (
    <>
      <p className="text-xs text-gray-500 tracking-widest"> {head}</p>
      <h1 className="mt-3">{title}</h1>
      <Grid className="mt-3" container>
        {a.map((v) => (
          <Grid xs={12} item md={6} key={v.s} xl={6} lg={6} sm={6}>
            <TextField
              className={`year ${v.s}`}
              size="medium"
              placeholder={v.p}
              InputLabelProps={{
                style: {},
              }}
              value={values[v.i]}
              InputProps={{
                style: {
                  height: "62px",
                  //   ...(!focused && { top: `${labelOffset}px` }),
                },
              }}
              style={{
                borderRadius: "1rem",
                width: "100%",
              }}
              onChange={({ target: { value } }) => handleChange(v.i, value)}
            />
          </Grid>
        ))}
      </Grid>
      <Alert
        severity="error"
        className="items-center w-full mt-4 rounded-2xl h-16 text-black redalert"
        icon={<Image src={Sheild} alt="" className="" />}
      >
        {alert}
      </Alert>
    </>
  );
}

export default AskName;

// {" "}
//         {/* {dobShow == "contact" ? (
//           <TextField
//             className={`year ${v.s}`}
//             size="medium"
//             // value={values[]}
//             placeholder={v.p}
//             InputLabelProps={{
//               style: {},
//             }}
//             InputProps={{
//               style: {
//                 height: "62px",
//                 //   ...(!focused && { top: `${labelOffset}px` }),
//               },
//             }}
//             style={{
//               borderRadius: "1rem",
//               width: "100%",
//             }}
//             onChange={handleChange}
//           />
//         ) : ( */}
