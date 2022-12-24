import React, { useState } from "react";
import { Form, Button, Typography, Checkbox } from "antd";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SocialLoginButtons from "../../../pages/AuthLogin/SocialLoginButtons.js";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

const { Title, Link, Paragraph } = Typography;

const schema = object().shape({
  email: string().required("Username is required"),
  password: string().required("Password is required"),
});

function Login({ setView, onSlide, onFinish, view }) {
  const [showPassword, setShowPassword] = useState(false);

  const { register, formState, handleSubmit } = useForm({
    validationSchema: schema,
  });

  const { isSubmitting, errors, isLoading } = formState;

  console.log("errorr", errors);

  const loginsubmit = async (data) => {
    console.log("data", data);
    try {
      const res = await fetch(
        "https://onecloudapi.azurewebsites.net/api/v1/account/loginDummy?userID=abc",
        {
          method: "POST",
          mode: "no-cors",
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );
      const datas = await res.json();
      console.log("re", datas);
    } catch (error) {
      console.log("ererre", error);
    }
  };

  return (
    <div
      id="login_container"
      className={`w-full ${
        view == "login" ? "enter" : "exit"
      } absolute top-0 trans-0`}
    >
      <Title level={3} className="mt-8">
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
      <form onSubmit={handleSubmit(loginsubmit)}>
        <FormControl margin="normal" fullWidth>
          <TextField
            placeholder="Email address"
            variant="standard"
            fullWidth
            name="email"
            id="email"
            helperText={errors?.email ? errors.email.message : ""}
            error={!!errors?.email}
            {...register("email", { required: true })}
          />
        </FormControl>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : ""}
            onChange={() => ""}
            {...register("password", { required: true })}
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
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
              // onSlide();
            }}
          >
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          htmlType="submit"
          style={{ backgroundColor: "#4f77ff", height: "50px" }}
          className="w-full mt-5 text-white"
          size="large"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Login with email
        </Button>
      </form>
    </div>
  );
}

export default Login;
