import React, { useState } from "react";
import ReactSelect, { components } from "react-select";
// import { colourOptions } from "../Datetimestep";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IlusSecond from "../components/second_back.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DropdownIndicator = (props: any, open: any) => {
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

type Props = {
  title?: any;
  placeholder: any;
  values?: any;
  handleChange?: any;
  options: any;
  onChange: any;
  value: any;
  err?: any;
  setErr?: any;
};

function ReusableSelect({
  onChange,
  placeholder,
  value,
  options,
  err,
  setErr,
}: Props) {
  const [open, setOPen] = useState(false);

  console.log("ReusableSelect", value);

  return (
    <ReactSelect
      // menuIsOpen
      className="react__select mr-3"
      defaultValue={options[0]}
      placeholder={placeholder}
      value={options.filter((v: any) => v.value == value)[0]}
      menuPortalTarget={document.body}
      onChange={onChange}
      components={{
        DropdownIndicator: (props) => DropdownIndicator(props, open),
      }}
      onMenuOpen={() => {
        setErr("");
        setOPen(true);
      }}
      onMenuClose={() => setOPen(false)}
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 1 }),
        control: (provided, { isFocused, isDisabled }) => ({
          ...provided,
          height: "60px",
          borderBottom: isFocused && "none",
          borderRadius: `1rem 1rem ${!isFocused ? "1rem 1rem" : "0 0"}`,
          ...(err && {
            border: `1.5px solid #DE2654`,
          }),
        }),
        menu: (provided, { clearValue, isLoading }) => ({
          ...provided,
          marginTop: "1px",
          borderTopStyle: "hidden !important",
          ...(err && {
            border: `1.5px solid #DE2654`,
          }),
          borderRadius: "0 0 1rem 1rem",
          overflowY: "hidden",
          position: "absolute",
          zIndex: 1,
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
