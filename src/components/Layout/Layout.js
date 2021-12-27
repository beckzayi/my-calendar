import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Container from "./Container";

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <Container>
          <Header />
        </Container>
      </Layout.Header>
      <Layout.Content style={{ background: "#fff" }}>
        {children}
      </Layout.Content>
    </Layout>
  );
};

export default PageLayout;
