import React, { useState } from "react";
import ReactSelect, { components } from "react-select";
import { colourOptions } from "../Datetimestep";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IlusSecond from "../components/second_back.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DropdownIndicator = (props, open) => {
  return (
    <components.DropdownIndicator className="" {...props}>
      {open ? (
        <KeyboardArrowUpIcon className="" />
      ) : (
        <ExpandMoreIcon
          // className="text-black"
          style={{ color: "#626873" }}
        />
      )}
    </components.DropdownIndicator>
  );
};

function ReusableSelect({ handleChange, placeholder, value, options }) {
  const [open, setOPen] = useState(false);

  return (
    <ReactSelect
      // menuIsOpen
      className="react__select mr-3"
      defaultValue={options[0]}
      placeholder={placeholder}
      menuPortalTarget={document.body}
      components={{
        DropdownIndicator: (props) => DropdownIndicator(props, open),
      }}
      onMenuOpen={() => setOPen(true)}
      onMenuClose={() => setOPen(false)}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        control: (provided, { isFocused, isDisabled }) => ({
          ...provided,
          height: "60px",
          width: "200px",
          // zIndex: 9999,
          borderBottom: isFocused && "none",
          borderRadius: `1rem 1rem ${!isFocused ? "1rem 1rem" : "0 0"}`,
        }),
        menu: (provided, { clearValue, isLoading }) => ({
          ...provided,
          marginTop: "1px",
          borderTopStyle: "hidden !important",
          border: "2px solid #0755db",
          borderRadius: "0 0 1rem 1rem",
          overflowY: "hidden",
          position: "absolute",
          zIndex: 9999,
          marginRight: "20px",
        }),
        option: (provided, { isFocused, isSelected }) => ({
          ...provided,
          overflowY: "hidden",
          zIndex: 10,
          height: "60px",
          display: "flex",
          alignItems: "center",
          backgroundColor:
            (isSelected && "#0755db") || (isFocused && "#D3E3FE") || "",
        }),
        indicatorSeparator: () => ({ display: "none" }),
      }}
      isClearable={false}
      isSearchable={false}
      name="color"
      options={options}
    />
    // </div>
  );
}

export default ReusableSelect;
