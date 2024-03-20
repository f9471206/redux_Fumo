import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function MyFooter() {
  return (
    <Footer style={{ textAlign: "center", marginTop: "auto" }}>
      Fumo 購物車 練習用 ©{new Date().getFullYear()}
    </Footer>
  );
}
