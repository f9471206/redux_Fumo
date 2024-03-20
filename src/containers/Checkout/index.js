import React from "react";
import { Layout, Timeline } from "antd";
import { Outlet, useParams } from "react-router-dom";
const { Content } = Layout;
const CheckDetail = () => {
  const { detail } = useParams();

  return (
    <Content style={{ padding: "0 48px" }}>
      <div
        style={{
          height: "100%",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ paddingBottom: "1.5rem" }}>訂單確認</h2>
        <Timeline
          items={[
            {
              children: "基本資料",
              color: detail ? "green" : "blue",
            },
            {
              children: "商品細節",
              color: detail ? "blue" : "gray",
            },
          ]}
        />
        <Outlet />
      </div>
    </Content>
  );
};

export default CheckDetail;
