import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, notification } from "antd";
import ShoppingCart from "./ShoppingCart";

const { Header } = Layout;

const Nav = (props) => {
  const items = [
    {
      key: "1",
      label: <Link to={"/"} children="商店" />,
    },
    {
      key: "2",
      label: <Link to={"/order"} children="訂單" />,
    },
  ];

  //完成訂單提示
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "購買成功",
      description: <Link to={"/order"}>前往訂單查看</Link>,
    });
  };

  useEffect(() => {
    if (props.state.length !== 0) {
      openNotificationWithIcon("success");
    }
  });

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {contextHolder}
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
      {/* 購物車 */}
      <ShoppingCart />
    </Header>
  );
};

export default connect((state) => ({ state: state.order }), {})(Nav);
