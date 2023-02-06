import React, { useEffect, useState } from "react";
import { Form, Button, Typography, Checkbox } from "antd";
import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SocialLoginButtons from "../../../pages/AuthLogin/SocialLoginButtons.js";

const { Title, Link, Paragraph } = Typography;

const schema = object().shape({
  email: string().required("Email is required"),
  password: string().required("Password is required"),
});

function Login({ setView, onSlide, onFinish, view }) {
  const [showPassword, setShowPassword] = useState(false);

  const { register, formState, handleSubmit, setError, reset } = useForm({
    resolver: yupResolver(schema),
    // validationSchema: schema,
  });

  const { isSubmitting, errors, isLoading, defaultValues } = formState;
  console.log("formState", formState);

  const loginsubmit = async (data) => {
    console.log("data", data);
    try {
      // await this.axios.post(`http://localhost:1337/api/auth/local/register`, {
      //                           name: this.name,
      //                           password: this.password,
      //                           email: this.email,
      //                           username: this.username
      //                       })
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        mode: "no-cors",
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          identifier: data.email,
          password: data.password,
        }, // body data type must match "Content-Type" header
      });
      const datas = await res.json();
      console.log("re", datas);
    } catch (error) {
      console.log("ererre", error);
    }
  };

  useEffect(() => {
    reset();
  }, [view]);

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
      <form onSubmit={handleSubmit(loginsubmit, setError)}>
        <FormControl margin="normal" fullWidth>
          <TextField
            placeholder="Email address"
            variant="standard"
            fullWidth
            name="email"
            id="email"
            helperText={errors?.email ? errors.email.message : ""}
            error={!!errors?.email}
            {...register("email", {
              required: true,
            })}
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
            {...register("password", { required: "Password is Requried" })}
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
