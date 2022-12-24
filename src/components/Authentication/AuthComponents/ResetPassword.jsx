import React from "react";
import { Form, Button, Typography } from "antd";
import { FormControl, TextField } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

const { Title, Link, Paragraph } = Typography;

function ForgotPassword({
  setView,
  onSlide,
  view,
  // showPassword,
  // onFinish,
  // setShowPassword,
}) {
  
  return (
    <div
      style={{
        width: "100%",
      }}
      className={`absolute top-0 text-left pt-16 ${
        view == "password" ? "enter" : "exit"
      } trans-200`}
      id="password_container"
    >
      <Title level={3}>Recover your password</Title>
      <Paragraph>
        Fill in your e-mail address below and we will send you an email with
        further instructions.
      </Paragraph>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="standard-password-input"
          placeholder="Email address"
          type="password"
          autoComplete="current-password"
          variant="standard"
          fullWidth
        />
      </FormControl>
      <Button
        type="primary"
        style={{ backgroundColor: "#4f77ff", height: "50px" }}
        htmlType="submit"
        className="w-full mt-5"
        size="large"
      >
        Recover your password
      </Button>
      <Link
        className="leading-10"
        onClick={() => {
          onSlide();
          setView("login");
        }}
      >
        Already have an account?
      </Link>
      <br />
      <Link
        className=""
        onClick={() => {
          setView("signup");
          onSlide();
        }}
      >
        Don't have an account?
      </Link>
    </div>
  );
}

export default ForgotPassword;
