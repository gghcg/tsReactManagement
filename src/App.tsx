import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps, theme, Breadcrumb } from "antd";
import { GithubOutlined, FileOutlined, HomeOutlined } from "@ant-design/icons";
import styles from "./app.module.scss";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const items: MenuProps["items"] = [
    {
      name: "Home",
      path: "/home",
      icon: HomeOutlined,
    },
    {
      name: "About",
      path: "/about",
      icon: FileOutlined,
    },
    {
      name: "User",
      path: "/user",
      icon: GithubOutlined,
      children: [
        { name: "UserInfo", path: "/user/info", icon: GithubOutlined },
      ],
    },
  ].map((item, index) => {
    let newItem = item.children
      ? {
          key: item.path,
          icon: React.createElement(item.icon),
          label: `${item.name}`,
          children: item.children.map((item) => {
            return {
              key: item.path,
              icon: React.createElement(item.icon),
              label: `${item.name}`,
            };
          }),
        }
      : {
          key: item.path,
          icon: React.createElement(item.icon),
          label: `${item.name}`,
        };
    return newItem;
  });
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigateTo = useNavigate();
  const mnueClick = (e: { key: string }) => {
    console.log(e);
    navigateTo(e.key);
  };
  return (
    <div className={styles.App}>
      <Layout style={{ height: "100vh" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          // collapsible={true} 是否可折叠
        >
          <div style={{ height: "50px" }} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
            onClick={mnueClick}
          />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content
            className={styles.contentStyle}
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <Outlet></Outlet>
          </Content>
          <Footer>111</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
