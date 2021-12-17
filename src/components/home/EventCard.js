import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const StyledInfo = styled.div`
  color: gray;
`;

export default ({ title, duration, eventType, bookingLink }) => (
  <Card title={title}>
    <StyledInfo>
      {duration}, {eventType}
    </StyledInfo>
    <div>
      <a href={bookingLink}>View booking page</a>
    </div>
  </Card>
);
