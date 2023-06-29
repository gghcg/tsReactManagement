import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, Breadcrumb } from "antd";
import { GithubOutlined, FileOutlined, HomeOutlined } from "@ant-design/icons";
import LeftMenu from "./components/leftMenu";
import styles from "./app.module.scss";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuList = [
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
        {
          name: "UserInfo",
          path: "/user/info",
          icon: GithubOutlined,
        },
      ],
    },
  ];
  // TODO 收缩菜单展示框
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
          <LeftMenu menuList={menuList}></LeftMenu>
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
