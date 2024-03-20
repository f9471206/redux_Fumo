import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, theme } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { storeSort } from "../../redux/actions/products";

const { Content, Sider } = Layout;
const tag = [
  {
    key: "all",
    icon: <HomeOutlined />,
    label: "ALL",
  },
  {
    key: "shrine",
    label: "博麗神社",
  },
  {
    key: "magic",
    label: "魔法之森",
  },
  {
    key: "Konmakan",
    label: "紅魔館",
  },
  {
    key: "Subterranean",
    label: "地靈殿",
  },
  {
    key: "other",
    label: "其他",
  },
];
const ProductStore = ({ storeSort }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navgate = useNavigate();
  const onClick = (e) => {
    navgate("/");
    storeSort(e.key);
  };

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="50"
        width={200}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["all"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={tag}
          onClick={onClick}
        />
      </Sider>
      <Layout
        style={{
          padding: "0 16px 16px",
        }}
      >
        <Content
          style={{
            padding: 16,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect(() => ({}), { storeSort })(ProductStore);
