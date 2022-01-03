import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Form, Input, Select, message } from "antd";
import { LeftOutlined, EnvironmentOutlined, PhoneOutlined, CameraOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Container from "../../Layout/Container";
import WrapperContainer from "../../Wrapper/WrapperContainer";
import WrapperSubHeader from "../../Wrapper/WrapperSubHeader";
import { createEventType } from "../../../state/actions/eventType";

const pageTitle = "Create One-on-One Event Type",
  link = "/event_types/new";

const StyledWrapperForm = styled.div`
  border: 1px solid #666a73;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px #666a73;
`;

const WrapperFormHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
`;

const StyledSummaryInput = styled.div`
  font-size: 12px;
  color: grey;
`;

const WrapperFormMainSection = styled.div`
  max-width: 536px;
  padding: 32px 48px;
`;

const WrapperFormFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #d0d0d0;
  display: flex;
`;

const WrapperFormButtons = styled.div`
  margin-left: auto;
`;

const locationOptions = [
  {
    value: "in-person",
    display: <span><EnvironmentOutlined style={{ color: '#1890ff', marginRight: '8px' }} />In-person meeting</span>
  },
  {
    value: "phone",
    display: <span><PhoneOutlined style={{ color: "#1890ff", marginRight: "8px" }} />Phone call</span>
  },
  {
    value: "zoom",
    display: <span><CameraOutlined style={{ color: "#1890ff", marginRight: "8px" }} />Zoom</span>
  },
];

const CreateOneOnOne = () => {
  const navigate = useNavigate(),
    dispatch = useDispatch();

  const [name, setName] = useState(null),
    [location, setLocation] = useState(null);
  
  const renderSubHeader = (pageTitle, link) => {
    const handleClick = (link) => navigate(link);
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
                  onClick={() => handleClick(link)}
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

  const renderFormButtons = () => (
    <WrapperFormButtons>
      <Form.Item style={{ marginBottom: "0" }}>
        <Button type="text" shape="round">
          Cancel
        </Button>
        <Button type="primary" shape="round" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </WrapperFormButtons>
  );

  const renderFormSummary = () => (
    <div>
      <div>What event is this?</div>
      <StyledSummaryInput>{name && `${name}, `}{location ? location : "No location given"}</StyledSummaryInput>
    </div>
  );

  const handleChangeName = (e) => {
    const { value } = e.target;
    setName(value)
  }

  const handleChangeLocation = (value) => {
    const option = locationOptions.find(opt => opt.value === value);
    setLocation(option.display);
  }

  const [form] = Form.useForm();

  const renderForm = () => {
    const handleSubmit = (values) => {
      const initialObj = {
        id: Math.ceil(Math.random() * 1000),
        eventType: "One-on-One",
        duration: "30 mins",
        active: false,
      };
      const obj = {
        ...initialObj,
        ...values
      }
      
      /**
       * TODO: backend API call for creating a new Event Type with axios post
       */
      dispatch(createEventType(obj));
      message.success("Saved");
    }
    return (
      <StyledWrapperForm>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <WrapperFormHeader>
            {renderFormSummary()}
            {renderFormButtons()}
          </WrapperFormHeader>

          <WrapperFormMainSection>
            <Form.Item
              label="Event name"
              name="title"
              rules={[{ required: true, message: 'Please input the event name' }]}
              tooltip="Enter a name for your event. The circled text in the screen shot below is the event name."
            >
              <Input onChange={handleChangeName} />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: 'Please input the location' }]}
              tooltip="Use the 'Location' field to specify how and where both parties will connect at the scheduled time. The location entered here will appear on the confirmation page after events are scheduled and in the calendar event added to both you and your invitee's calendars."
            >
              <Select placeholder="Add a location" allowClear={true} onChange={handleChangeLocation}>
                {locationOptions.map(opt => (
                  <Select.Option key={opt.value} value={opt.value}>
                    {opt.display}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input the description' }]}
              tooltip="Use this optional field to provide a description of your event. The circled text in the screen shot below is the event description."
            >
              <Input.TextArea rows={5} />
            </Form.Item>
            <Form.Item
              label="Event link"
              name="bookingLink"
              rules={[{ required: true, message: 'Please input the event link' }]}
              tooltip="Event URL is the link you can share with your invitees if you want them to bypass the 'Pick Event' step on your Calendly page and go directly to the 'Pick Date & Time' step. The event URL is circled in the sample below. We'll automatically generate an Event URL for you if you don't specify one."
            >
              <Input />
            </Form.Item>
          </WrapperFormMainSection>

          <WrapperFormFooter>
            {renderFormButtons()}
          </WrapperFormFooter>
        </Form>
      </StyledWrapperForm>
    );
  }

  return (
    <div>
      {renderSubHeader(pageTitle, link)}

      <Container>
        <WrapperContainer>
          {renderForm()}
        </WrapperContainer>
      </Container>
    </div>
  )
};

export default CreateOneOnOne;
