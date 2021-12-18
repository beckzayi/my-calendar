import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "./Header";
import Container from "./Container";

const WrapperContent = styled.div`
  padding: 0 60px;
`;

const WrapperChildren = styled.div`
  padding: 32px 0;
`;

const PageLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Layout.Header>
        <Container>
          <Header />
        </Container>
      </Layout.Header>
      <Layout.Content>
        <WrapperContent>
          <Container>
            <WrapperChildren>{children}</WrapperChildren>
          </Container>
        </WrapperContent>
      </Layout.Content>
    </Layout>
  );
};

export default PageLayout;
