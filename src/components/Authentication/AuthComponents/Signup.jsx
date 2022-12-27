import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";

import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const { Title, Link } = Typography;

const schema = object().shape({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

function Signup({ setView, onSlide, view, onFinish }) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("Signupview", view);

  const [showPassword, setShowPassword] = useState(false);

  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [view]);

  return (
    <div
      style={{
        width: "100%",
      }}
      className={`${
        view == "signup" ? "enter" : "exit"
      } absolute top-0 trans-200`}
      id="signup_container"
    >
      <Title className="mt-6" level={3}>
        {" "}
        Sign up for free!
      </Title>
      <form
        onSubmit={handleSubmit(onFinish)}
        className="login-form flex flex-col items-center justify-center mt-6"
      >
        {[
          { name: "username", type: "text" },
          { name: "email", type: "text" },
          { name: "password", type: "password" },
        ].map((v) => (
          <FormControl margin="normal" key={v.name} fullWidth>
            <TextField
              id={v.name}
              name={v.name}
              placeholder={v.name.charAt(0).toUpperCase() + v.name.slice(1)}
              type={showPassword && v.type == "password" ? "text" : v.type}
              style={{ fontSize: "18px" }}
              className="inputs"
              autoComplete="current-password"
              variant="standard"
              helperText={errors[v.name] ? errors[v.name].message : ""}
              error={!!errors.email}
              InputProps={{
                endAdornment: v.name == "password" && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              {...register(v.name, { required: true })}
            />
          </FormControl>
        ))}
        <Button
          type="primary"
          disabled={isSubmitting}
          loading={isSubmitting}
          style={{ backgroundColor: "#4f77ff", height: "50px" }}
          htmlType="submit"
          className="w-full mt-5"
          size="large"
        >
          Sign up with email
        </Button>
      </form>
      <Link
        className="leading-10"
        onClick={() => {
          setView("login");
        }}
      >
        Already have an account?
      </Link>
    </div>
  );
}

export default Signup;
