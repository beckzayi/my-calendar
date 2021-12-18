import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "./Header";

const WrapperContent = styled.div`
  padding: 32px 0;
`;

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ padding: "0 60px" }}>
        <WrapperContent>{children}</WrapperContent>
      </Layout.Content>
    </Layout>
  );
};

export default PageLayout;
