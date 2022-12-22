import React, { useState } from "react";
import {
  Checkbox,
  Col,
  Form,
  Row,
  Button,
  Input,
  Typography,
  Divider,
} from "antd";
import logo from "../../assets/images/brand-logo.png";
import Social from "./S.js";
import { UserOutlined } from "@ant-design/icons";
import "./AuthLogin.scss";
import { FormControl, TextField } from "@mui/material";

const { Title, Paragraph, Text, Link } = Typography;

function AuthLogin() {
  const [view, setView] = useState("login");

  const onFinish = () => {};

  return (
    <>
      <Row className="auth_login h-max">
        <Col
          span={8}
          className="flex flex-col text-center omb_login text-white pr-10 pl-10 wrapper"
        >
          <div className="brand-logo flex justify-center mt-10">
            <img src={logo} width="150" alt="brand-logo" />
          </div>
          {view == "login" && (
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
                  }}
                >
                  Sign Up Free!
                </Link>{" "}
              </Paragraph>
              <Social />

              <div className="mt-5 mb-3 flex flex-row justify-center items-center relative">
                <Divider className="bg-gray-50 h-1" />
                <span className="text-gray-400 ml-5 mr-5"> Or</span>{" "}
                <Divider className="bg-gray-50 h-1" />
              </div>
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
              <FormControl margin="normal" fullWidth>
                <TextField
                  id="standard-password-input"
                  placeholder="Password"
                  type="password"
                  fullWidth
                  // className="mt-10"
                  onChange={() => ""}
                  autoComplete="current-password"
                  variant="standard"
                />
              </FormControl>
              <div className="mt-5 flex justify-between">
                <div>
                  <Checkbox />
                  <span className="text-black ml-2">Remember me</span>
                </div>
                <Link onClick={() => setView("password")}>
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
          )}

          {/* SIGN UP VIEW */}

          {view == "signup" && (
            <div
              style={{
                border: "1px solid blue",
                width: "100%",
              }}
              id="signup_container"
              // className="left--600"
            >
              <Title level={3}> Sign up for free!</Title>
              <Form
                name="normal_login"
                className="login-form d-flex items-center justify-center"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                {[
                  { name: "username" },
                  { name: "email" },
                  { name: "password" },
                ].map((v) => (
                  <FormControl margin="normal" fullWidth>
                    <TextField
                      id={v.name}
                      name={v.name}
                      placeholder={v.name}
                      type="password"
                      style={{ fontSize: "16px" }}
                      className="inputs"
                      autoComplete="current-password"
                      variant="standard"
                      margin="normal"
                      fullWidth
                    />
                  </FormControl>
                ))}

                <Form.Item>
                  <Button
                    type="primary"
                    style={{ backgroundColor: "#4f77ff" }}
                    htmlType="submit"
                    className="w-full"
                    size="large"
                  >
                    Sign up with email
                  </Button>
                </Form.Item>
              </Form>
              <Link
                className="mt-9 mb-5"
                onClick={() => {
                  setView("login");
                  // document
                  //   .getElementById("signup_container")
                  //   .classList.replace("slideadd", "a_reverse");
                  // document
                  //   .getElementById("login_container")
                  //   .classList.add("slideadd");
                }}
              >
                Allready have an account?
              </Link>
            </div>
          )}

          {/* ----------------------- RESET PASSWORD ------------------------- */}
          {view == "password" && (
            <div
              style={{
                width: "100%",
              }}
              id="password_container"
              className="text-left pt-16"
            >
              <Title level={3}>Recover your password</Title>
              <Paragraph>
                Fill in your e-mail address below and we will send you an email
                with further instructions.
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
                className="mt-9 mb-5 leading-5"
                onClick={() => {
                  setView("login");
                  // document
                  //   .getElementById("password_container")
                  //   .classList.add("slideremove");
                  // document
                  //   .getElementById("login_container")
                  //   .classList.add("slideadd");
                }}
              >
                Already have an account?
              </Link>
              <br />
              
              <Link
                className="leading-9"
                onClick={() => {
                  setView("signup");
                  // document
                  //   .getElementById("password_container")
                  //   .classList.add("slideremove");
                  // document
                  //   .getElementById("signup_container")
                  //   .classList.add("slideadd");
                  // document
                  //   .getElementById("login_container")
                  //   .classList.toggle("slideadd", "slideremove");
                }}
              >
                Don't have an account?
              </Link>
              {/* </Form> */}
            </div>
          )}
        </Col>
        <Col
          span={16}
          style={{ backgroundColor: "rgb(45, 56, 94, 0.9)" }}
          className="bg-image flex flex-col text-center justify-center text-white"
        >
          <Title style={{ color: "white" }}>Welcome to Authfy Account</Title>
          <Paragraph className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </Col>
      </Row>
    </>
  );
}

export default AuthLogin;
