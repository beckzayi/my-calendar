import React from "react";
import styled from "styled-components";
import { EnvironmentOutlined, PhoneOutlined, CameraOutlined } from "@ant-design/icons";
import WrapperBox from "../../Wrapper/WrapperBox";

const StyledSummaryInput = styled.div`
  font-size: 12px;
  color: grey;
`;

const locationOptions = [
  {
    value: "in-person",
    display: <span><EnvironmentOutlined style={{ color: '#1890ff', marginRight: '4px' }} />In-person meeting</span>
  },
  {
    value: "phone",
    display: <span><PhoneOutlined style={{ color: "#1890ff", marginRight: "4px" }} />Phone call</span>
  },
  {
    value: "zoom",
    display: <span><CameraOutlined style={{ color: "#1890ff", marginRight: "4px" }} />Zoom</span>
  },
];

const EventTypeGeneral = ({ eventType }) => {
  if (eventType === null) {
    return null;
  }

  const { title, location } = eventType;

  const renderLocation = (location) => {
    const option = locationOptions.find(opt => opt.value === location);
    return option.display;
  }

  return (
    <WrapperBox>
      <div>What event is this?</div>
      <StyledSummaryInput>{ title }, { renderLocation(location) }</StyledSummaryInput>
    </WrapperBox>
  )
}

export default EventTypeGeneral;

