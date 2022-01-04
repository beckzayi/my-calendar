import React from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Container from "./Container";
import WrapperContainer from "../Wrapper/WrapperContainer";
import WrapperSubHeader from "../Wrapper/WrapperSubHeader";

const SubHeader = ({ pageTitle, previousLink }) => {
  const navigate = useNavigate(),
    handleClick = (previousLink) => navigate(previousLink);
  
  return (
    <WrapperSubHeader>
      <Container>
        <WrapperContainer>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <Button
                type="primary"
                ghost={true}
                shape="round"
                size="large"
                icon={<LeftOutlined />}
                onClick={() => handleClick(previousLink)}
              >
                Back
              </Button>
            </Col>
            <Col className="gutter-row text-center" span={12}>
              <h1>{pageTitle}</h1>
            </Col>
          </Row>
        </WrapperContainer>
      </Container>
    </WrapperSubHeader>
  );
}

export default SubHeader;
