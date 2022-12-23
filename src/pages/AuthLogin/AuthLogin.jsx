import React from "react";
import { Checkbox, Col, Form, Row, Button, Typography } from "antd";
import {
  SwitchTransition,
  CSSTransition as ReactTransition,
} from "react-transition-group";
import logo from "../../assets/images/brand-logo.png";
import "./AuthLogin.scss";
import "./s.css";
import Signup from "../../components/Authentication/AuthComponents/Signup";
import ResetPassword from "../../components/Authentication/AuthComponents/ResetPassword";
import Login from "../../components/Authentication/AuthComponents/Login";
// import "../../../src/App.css";
import SocialLoginButtons from "./SocialLoginButtons.js";
const { Title, Paragraph } = Typography;

function AuthLogin() {
  const [state, setState] = React.useState(true);
  const [view, setView] = React.useState("login");
  const helloRef = React.useRef(null);
  const goodbyeRef = React.useRef(null);
  const nodeRef = "state" ? goodbyeRef : helloRef;

  const onFinish = () => {};

  console.log("state", state, view);
  const onSlide = () => setState((s) => !s);

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
          <SwitchTransition mode="out-in">
            <ReactTransition
              key={state}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div ref={nodeRef}>
                {/* <Button
                  onClick={() => {
                    setView(
                      (s) =>
                        (s === "login" && "signup") ||
                        (s === "signup" && "pass") ||
                        (s === "pass" && "login")
                    );
                    setState((s) => !s);
                  }}
                >
                  sss
                  {(view == "login" && "Hello, world!") ||
                    (view == "signup" && "Goodbye, world!") ||
                    (view == "pass" && "Goodbye, adnan!")}
                </Button> */}
                <div>
                  {view == "login" && (
                    <Login
                      setView={setView}
                      onSlide={onSlide}
                      onFinish={onFinish}
                    />
                  )}
                  {view == "signup" && (
                    <Signup
                      setView={setView}
                      onSlide={onSlide}
                      onFinish={onFinish}
                    />
                  )}
                  {view == "password" && (
                    <ResetPassword
                      setView={setView}
                      onSlide={onSlide}
                      onFinish={onFinish}
                    />
                  )}
                </div>
              </div>
            </ReactTransition>
          </SwitchTransition>
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
