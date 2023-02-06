import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import axios from "axios";
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
  const { register, handleSubmit, formState, setError, reset } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Signupview", view);

  const [showPassword, setShowPassword] = useState(false);

  const { isSubmitting, errors } = formState;

  useEffect(() => {
    reset();
  }, [view]);

  const signup = async (data) => {
    console.log("data", data);
    try {
      const datas = await axios.post(
        `http://localhost:1337/api/auth/local/register`,
        {
          name: "this.name",
          password: "Whis.password",
          email: "Whis.password@gma.com",
          username: "this.username",
        }
      );

      // const res = await fetch("http://localhost:1337/api/auth/local", {
      //   method: "POST",
      //   mode: "no-cors",
      //   // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //   // credentials: "same-origin", // include, *same-origin, omit
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     identifier: data.email,
      //     password: data.password,
      //   }), // body data type must match "Content-Type" header
      // });
      // const datas = await res.json();
      console.log("re", datas);
    } catch (error) {
      console.log("ererre", error);
    }
  };

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
        onSubmit={handleSubmit(signup, setError)}
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
              error={!!errors[v.name]}
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
