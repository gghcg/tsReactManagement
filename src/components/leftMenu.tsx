import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";

const LeftMenu = ({ menuList }: { menuList: any }) => {
  const mapMenu = (val: any) => {
    const menuData: any = val.map((item: any) => {
      if (!item.children) {
        return {
          key: item.path,
          icon: React.createElement(item.icon),
          label: `${item.name}`,
        };
      } else {
        return {
          key: item.path,
          icon: React.createElement(item.icon),
          label: `${item.name}`,
          children: mapMenu(item.children),
        };
      }
    });
    return menuData;
  };
  const navigateTo = useNavigate();
  const mnueClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  const items = mapMenu(menuList);
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[
        `${location.pathname === "/" ? "/home" : location.pathname}`,
      ]}
      items={items}
      onClick={mnueClick}
    />
  );
};

export default LeftMenu;
