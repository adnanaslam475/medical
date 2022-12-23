import React from "react";
import { Form, Button, Typography, Checkbox } from "antd";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SocialLoginButtons from "../../../pages/AuthLogin/SocialLoginButtons.js";

const { Title, Link, Paragraph } = Typography;

function Login({ setView, onSlide, showPassword, onFinish, setShowPassword }) {
  return (
    <div
      id="login_container"
      style={{
        width: "100%",
      }}
    >
      <Title level={3} className="mt-16">
        {" "}
        Login to your account
      </Title>
      <Paragraph>
        Don’t have an account?{" "}
        <Link
          onClick={() => {
            setView("signup");
            onSlide();
          }}
        >
          Sign Up Free!
        </Link>{" "}
      </Paragraph>
      <SocialLoginButtons />

      <div className="mt-7 mb-3 flex flex-row justify-center items-center relative">
        <span className="border-b-2 w-full" />
        <span className="text-gray-400 ml-5 mr-5"> Or</span>{" "}
        <span className="border-b-2 w-full" />
      </div>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="standard-password-input"
          placeholder="Email address"
          variant="standard"
          fullWidth
        />
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <TextField
          id="standard-password-input"
          placeholder="Password"
          type="password"
          fullWidth
          onChange={() => ""}
          autoComplete="current-password"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <div className="mt-1 flex justify-between">
        <div className="cursor-pointer" onClick={() => ""}>
          <Checkbox />
          <span className="text-black ml-2">Remember me</span>
        </div>
        <Link
          onClick={() => {
            setView("password");
            onSlide();
          }}
        >
          Forgot password?
        </Link>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "#4f77ff", height: "50px" }}
        className="w-full mt-5"
        size="large"
      >
        Login with email
      </Button>
    </div>
  );
}

export default Login;
