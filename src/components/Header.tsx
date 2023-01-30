import React from "react";
import Image from "next/image";
import Logo from "../components/policy_fetch_logo.png";
import Avatar from "../components/avatar.png";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

// export const CustomLoader = ({ src, width, quality }) => {
//   console.log("SRC", src); // this never logs
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

function Header() {
  return (
    <div
      className="h-35 flex justify-between"
      style={{ margin: "10px 10% 10px 10%" }}
    >
      <Image
        alt=""
        src={Logo}
        // loader={<CustomLoader />}
        // layout="fill"
        width={150}
        height={150}
        className=""
      />
      <div className="flex flex-row items-center">
        <div className="flex flex-col mr-3">
          <p>Speak to an advisor now</p>
          <h4
            className="text-right font-bold text-xl"
            style={{ color: "#0755DB" }}
          >
            <PhoneInTalkIcon />
            (800) 7458 232
          </h4>
        </div>
        <Image
          alt=""
          // loader={<CustomLoader />}
          // layout="fill"
          src={Avatar}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
