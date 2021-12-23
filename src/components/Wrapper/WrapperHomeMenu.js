import React from "react";
import styled from "styled-components";
import Container from "../Layout/Container";
import HomeMenu from "../Menu/HomeMenu";

const WrapperHomeMenu = styled.div`
  background: #fff;
`;

export default WrapperHomeMenu;

const ContainerHomeMenu = () => (
  <WrapperHomeMenu>
    <Container>
      <HomeMenu />
    </Container>
  </WrapperHomeMenu>
);

export { ContainerHomeMenu };

