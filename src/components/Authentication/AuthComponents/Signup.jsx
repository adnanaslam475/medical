import React from "react";
import { Form, Button, Typography } from "antd";

import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const { Title, Link } = Typography;

function Signup({ setView, onSlide, showPassword, onFinish, setShowPassword }) {
  return (
    <div
      style={{
        width: "100%",
      }}
      id="signup_container"
      // className="left--600"
    >
      <Title className="mt-6" level={3}>
        {" "}
        Sign up for free!
      </Title>
      <Form
        name="normal_login"
        className="login-form flex flex-col items-center justify-center mt-6"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {[{ name: "username" }, { name: "email" }, { name: "password" }].map(
          (v) => (
            <FormControl margin="normal" key={v.name} fullWidth>
              <TextField
                id={v.name}
                name={v.name}
                placeholder={v.name}
                type="password"
                style={{ fontSize: "16px" }}
                className="inputs"
                autoComplete="current-password"
                variant="standard"
                InputProps={{
                  endAdornment: v.name == "password" && (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
              />
            </FormControl>
          )
        )}

        <Button
          type="primary"
          style={{ backgroundColor: "#4f77ff", height: "50px" }}
          htmlType="submit"
          className="w-full mt-5"
          size="large"
        >
          Sign up with email
        </Button>
      </Form>
      <Link
        className="leading-10"
        onClick={() => {
          setView("login");
          onSlide();
          // document
          //   .getElementById("signup_container")
          //   .classList.replace("slideadd", "a_reverse");
          // document.getElementById("login_container").classList.add("slideadd");
        }}
      >
        Allready have an account?
      </Link>
    </div>
  );
}

export default Signup;
