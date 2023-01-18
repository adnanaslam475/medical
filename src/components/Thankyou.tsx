import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { CallEndRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import T from "./T.svg";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Thankyou() {
  return (
    <div className="flex items-center flex-col justify-center">
      <Typography variant="h4">Thank you</Typography>
      <Typography>An advisor will be in touch shortly.</Typography>
      <Image src={T} alt="" className="" height={270} />
      <Typography className="-mt-12">We found 8 possible plans for you!</Typography>

      <Typography variant="h6 mt-10">Want to take action right away?</Typography>
      <a
        href="tel:+1800229933"
        style={{
          width: "300px",
          borderRadius: "50px",
          backgroundColor: "#0755DB",
        }}
        className="mt-4 text-center p-5 bg-blue-800 text-white"
      >
        <PhoneInTalkIcon /> Call us now
      </a>
      <Button
        className="p-5 mt-4"
        style={{
          width: "300px",
          borderRadius: "50px",
          backgroundColor: "#EFF4FE",
          color: "#0755DB",
          whiteSpace: "nowrap",
        }}
        onClick={() =>
          window.open(
            "https://www.sunfirematrix.com/app/consumer/healthinsurance/?pspt=fda80390-969a-11ed-937f-b13d88758742#/plans/99501/02020/MAPD"
          )
        }
      >
        Browse plans online{" "}
        <ArrowForwardIcon
          style={{ color: "#0755DB" }}
          className="text-white ml-2"
        />
      </Button>
    </div>
  );
}

export default Thankyou;
