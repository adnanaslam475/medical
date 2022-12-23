import React, { useState } from "react";
import "./index.scss";
import {
  BellOutlined,
  LaptopOutlined,
  NotificationOutlined,
  SearchOutlined,
  ArrowRightOutlined,
  UserOutlined,
  RightOutlined,
  LeftOutlined,
  UpOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DehazeIcon from "@mui/icons-material/Dehaze";
import {
  Button,
  Layout,
  Menu,
  theme,
  notification,
  Dropdown,
  Space,
} from "antd";

import { IconButton } from "@mui/material";
import logo from "../assets/images/brand-logo.png";
import { ArrowLeft, ArrowRight, Search } from "@mui/icons-material";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            icon: (
              <span
                style={{
                  minWidth: "6px",
                  border: "1px solid black",
                  borderRadius: "100%",
                  height: "6px",
                }}
                className={`dot`}
              />
            ),
            label: `option${subKey}`,
          };
        }),
      };
    }
  );
  console.log("collapsed", collapsed);
  return (
    <Layout className="h-max layout" style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        style={{
          background: colorBgContainer,
          borderRight: "0.5px solid lightgray",
          // minWidth: "240px",
        }}
        className={`w-80 ${collapsed ? "sidebar" : ""}`}
        collapsed={collapsed}
      >
        <img className="logo" src={logo} alt="" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          // expandIcon={() => {
          //   return <RightOutlined className="text-xs" />;
          // }}
          // onSelect={(e) => console.log("e----------->", e)}
          items={items2}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="relative flex items-center"
          style={{
            padding: 0,
            background: colorBgContainer,
            borderBottom: "1px solid lightgray",
            height: "55px",
          }}
        >
          <IconButton
            size="large"
            disableFocusRipple
            disableRipple
            disableTouchRipple
            onClick={() => setCollapsed(!collapsed)}
          >
            <DehazeIcon className="toggle-icon ml-3 m-auto" fontSize="large" />
          </IconButton>
          <Button
            onClick={() => ""}
            className="hover:bg-blue-600 hover:text-white rounded-none"
          >
            + New Tasks
          </Button>
          <div className="h-full w-60 absolute top-0 right-0 flex items-center justify-between">
            <SearchOutlined
              size={50}
              className="text-4xl text-gray-600 cursor-pointer"
            />
            <div className="relative leading-3">
              <span className="h-7 w-7 text-white p-2 rounded-full bg-red-500 absolute right-0 translate-x-2 -translate-y-2 text-center flex items-center justify-center">
                2
              </span>
              <BellOutlined
                size={50}
                className="text-4xl ml-5 text-gray-600 cursor-pointer"
              />
            </div>

            <Dropdown
              menu={{
                style: {
                  minWidth: "160px",
                  borderRadius: 0,
                  right: 0,
                  position: "absolute",
                },
                items: [
                  {
                    label: "Profile",
                    key: "1",
                    icon: (
                      <UserOutlined
                        size={50}
                        className="text-4xl ml-5 text-gray-600 cursor-pointer"
                      />
                    ),
                  },
                  {
                    label: "Settings",
                    key: "2",
                    icon: (
                      <SettingOutlined
                        size={50}
                        className="text-4xl ml-5 text-gray-600 cursor-pointer"
                      />
                    ),
                  },
                  {
                    label: "Logout",
                    key: "3",
                    icon: (
                      <LogoutOutlined
                        size={50}
                        className="text-4xl ml-5 text-gray-600 cursor-pointer"
                      />
                    ),
                  },
                ],
              }}
              trigger={["click"]}
            >
              <span className="w-32 flex items-center justify-end text-center">
                <p className="">Nick</p>
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "pa100%",
                  }}
                  className="ml-1 w-10 h-10 cursor-pointer"
                  src={logo}
                  alt=""
                />
              </span>
            </Dropdown>
            {/* <span className="w-32 flex items-center justify-end text-center">
              <p className="">Nick</p>
              <img
                style={{ width: "40px", height: "40px", borderRadius: "100%" }}
                className="ml-1 w-10 h-10 cursor-pointer"
                src={logo}
                alt=""
              />
            </span> */}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;