import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1200px) {
    max-width: 1020px;
  }
`;

function Container(props) {
  return <StyledContainer {...props} />;
}

export default Container;
