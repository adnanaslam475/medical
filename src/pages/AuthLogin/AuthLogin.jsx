import React, { useEffect, useLayoutEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
// import {
//   SwitchTransition,
//   CSSTransition as ReactTransition,
// } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/brand-logo.png";
import "./AuthLogin.scss";
import "./s.css";
import Signup from "../../components/Authentication/AuthComponents/Signup";
import ResetPassword from "../../components/Authentication/AuthComponents/ResetPassword";
import LoginComponent from "../../components/Authentication/AuthComponents/Login";
import "../../../src/App.css";
import { useDispatch } from "react-redux";
import {
  authLogin,
  authSignup,
} from "../../components/Authentication/firebaseAuth/firebaseAuthSlice.js";
const { Title, Paragraph } = Typography;

function Login() {
  const nav = useNavigate();
  const [state, setState] = React.useState(true);
  const [view, setView] = React.useState("login");
  // const helloRef = React.useRef(null);
  // const goodbyeRef = React.useRef(null);
  // const nodeRef = "state" ? goodbyeRef : helloRef;

  const dispatch = useDispatch();

  const onLogin = async (data) => {
    console.log("data", data);
    try {
      const res = await dispatch(authLogin(data)).unwrap();
      console.log("data-------->", res);
      nav("/dashboard");
    } catch (err) {
      console.log(err, "errrr");
    }
  };

  const onRegister = async (data) => {
    console.log("data", data);
    try {
      const res = await dispatch(authSignup(data)).unwrap();
      console.log("onRegister-------->", res);
      // nav("/dashboard");
    } catch (err) {
      console.log(err, "errrr");
    }
  };

  const onReset = async (data) => {
    try {
      const res = await dispatch(authLogin(data)).unwrap();
      console.log("data-------->", res);
      nav("/dashboard");
    } catch (err) {
      console.log(err, "errrr");
    }
  };

  const onSlide = () => setState((s) => !s);
  useEffect(() => {
    document.getElementById("signup_container").classList.remove("exit");
    document.getElementById("login_container").classList.remove("enter");
    document.getElementById("password_container").classList.remove("exit");
  }, []);

  return (
    <>
      <Row className="auth_login h-max">
        <Col
          span={8}
          sm={12}
          md={12}
          lg={8}
          xs={24}
          xl={8}
          xxl={8}
          className="flex flex-col text-center omb_login text-white pr-10 pl-10 wrapper"
        >
          <div className="brand-logo flex justify-center mt-10">
            <img src={logo} width="150" alt="brand-logo" />
          </div>
          <div className="auth_container relative">
            <LoginComponent
              setView={setView}
              onSlide={onSlide}
              onFinish={onLogin}
              view={view}
            />
            <Signup
              setView={setView}
              view={view}
              onSlide={onSlide}
              onFinish={onRegister}
            />
            <ResetPassword
              view={view}
              setView={setView}
              onSlide={onSlide}
              onFinish={onReset}
            />
          </div>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={16}
          xs={24}
          xl={16}
          xxl={16}
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

export default Login;
