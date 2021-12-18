import React from "react";
import { Card, Row, Col, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-top: 5px solid #5864fe;
  &:hover {
    top: -2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  }
`;

const StyledInfo = styled.div`
  color: gray;
  cursor: pointer;
`;

const WrapperBookingLink = styled.div`
  padding-bottom: 20px;
`;

const WrapperShare = styled.div`
  font-size: 0.875rem;
  color: #1890ff;
  padding: 12px 0;
`;

export default ({ title, duration, eventType, bookingLink }) => (
  <StyledCard>
    <Card title={title}>
      <StyledInfo>
        {duration}, {eventType}
      </StyledInfo>

      <WrapperBookingLink>
        <a href={bookingLink} target="_blank" rel="noreferrer">
          View booking page
        </a>
      </WrapperBookingLink>

      <WrapperShare>
        <Row justify="space-between" align="middle">
          <Col>
            <CopyOutlined style={{ marginRight: "4px" }} />
            Copy Link
          </Col>
          <Col>
            <Button type="primary" ghost shape="round" size="small">
              Share
            </Button>
          </Col>
        </Row>
      </WrapperShare>
    </Card>
  </StyledCard>
);
