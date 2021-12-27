import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { LeftOutlined, ContactsOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Container from "../Layout/Container";
import WrapperContainer from "../Wrapper/WrapperContainer";
import WrapperSubHeader from "../Wrapper/WrapperSubHeader";
import InviteMessageBox from "./InviteMessageBox";

const StyledListType = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

const WrapperListTypeDesc = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;

const WrapperListTypeDescIcon = styled.div`
  width: 15%;
`;

const WrapperListTypeDescInfo = styled.div`
  width: 85%;
`;

const styleIcon = {
  fontSize: "2.8rem",
  fontWeight: "300",
  color: "#1890ff"
};

const WrapperListTypeAction = styled.div`
  width: 15%;
  text-align: right;
`;

const newTypes = [
  {
    icon: "ContactsOutlined",
    type: "One-on-One",
    description: "Let an invitee pick a time to meet with you."
  },
  {
    icon: "UsergroupAddOutlined",
    type: "Group",
    description: "Let multiple invitees meet with you at one time."
  }
];

const WrapperInviteMessageBox = styled.div`
  margin: 20px 0;
`;

const CreateEventType = () => {
  const navigate = useNavigate();
  const handleClickBack = () => navigate("/event_types");

  const renderIcon = (icon) => {
    switch (icon) {
      case "ContactsOutlined":
        return <ContactsOutlined style={styleIcon} />;
      case "UsergroupAddOutlined":
        return <UsergroupAddOutlined style={styleIcon} />;
      default:
        return <ContactsOutlined style={styleIcon} />;
    }
  }

  const renderTypes = (newTypes) => (
    <ul>
      {newTypes.map(({ icon, type, description }) => {
        return (
          <StyledListType key={type}>
            <WrapperListTypeDesc>
              <WrapperListTypeDescIcon>
                {renderIcon(icon)}
              </WrapperListTypeDescIcon>
              <WrapperListTypeDescInfo>
                <h2>{type}</h2>
                <p>{description}</p>
              </WrapperListTypeDescInfo>
            </WrapperListTypeDesc>
            <WrapperListTypeAction>
              <Button type="primary" shape="round" onClick={() => handleClick(type)}>Create</Button>
            </WrapperListTypeAction>
          </StyledListType>
        );
      })}
    </ul>
  );

  const renderInvite = () => (
    <WrapperInviteMessageBox>
      <InviteMessageBox />
    </WrapperInviteMessageBox>
  );

  const handleClick = (type) => {
    switch(type.toLowerCase()) {
      case 'one-on-one':
        navigate("/event_types/new/one");
        break;
      case 'group':
        navigate("/event_types/new/group");
        break;
      default:
        navigate("/event_types/new/one");
        break;
    }
  }

  return (
    <div>
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
                  onClick={handleClickBack}
                >
                  Back
                </Button>
              </Col>
              <Col className="gutter-row text-center" span={12}>
                <h1>Create New Event Type</h1>
              </Col>
            </Row>
          </WrapperContainer>
        </Container>
      </WrapperSubHeader>
      <Container>
        <WrapperContainer>
          {renderTypes(newTypes)}
          {renderInvite()}
        </WrapperContainer>
      </Container>
    </div>
  );
}

export default CreateEventType;
