import React from "react";
import { Layout } from "antd";
import { useRoutes } from "react-router-dom";
import routers from "./routers";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

export default function App() {
  const element = useRoutes(routers);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      {element}
      <Footer />
    </Layout>
  );
}
