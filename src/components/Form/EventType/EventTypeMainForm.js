import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Select, message } from "antd";
import { EnvironmentOutlined, PhoneOutlined, CameraOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { createEventType } from "../../../state/actions/eventType";
import FormButtonBlock from "../FormButtonBlock";

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

const locationOptions = [
  {
    value: "in-person",
    display: <span><EnvironmentOutlined style={{ color: "#1890ff", marginRight: "8px" }} />In-person meeting</span>
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

const EventTypeMainForm = (props) => {
  const previousLink = props.previousLink || "/event_types/new";

  const dispatch = useDispatch();
  const [title, setTitle] = useState(null),
    [location, setLocation] = useState(null);
  const [form] = Form.useForm();
  
  const handleChangeTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleChangeLocation = (value) => {
    const option = locationOptions.find(opt => opt.value === value);
    setLocation(option.display);
  }

  const handleSubmit = (values) => {
    const initialObj = {
      id: Math.ceil(Math.random() * 1000),
      eventType: "One-on-One",
      duration: 30,
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

  const FormSummary = () => (
    <div>
      <div>What event is this?</div>
      <StyledSummaryInput>{title && `${title}, `}{location ? location : "No location given"}</StyledSummaryInput>
    </div>
  );

  useEffect(() => {
    if (props.eventType) {
      setTitle(props.eventType.title);
      handleChangeLocation(props.eventType.location);
    }
  }, []);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      initialValues={ props.eventType }
    >
      <WrapperFormHeader>
        <FormSummary />
        <FormButtonBlock />
      </WrapperFormHeader>

      <WrapperFormMainSection>
        <Form.Item
          label="Event name"
          name="title"
          rules={[{ required: true, message: 'Please input the event name' }]}
          tooltip="Enter a name for your event. The circled text in the screen shot below is the event name."
        >
          <Input onChange={handleChangeTitle} />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please input the location' }]}
          tooltip="Use the 'Location' field to specify how and where both parties will connect at the scheduled time. The location entered here will appear on the confirmation page after events are scheduled and in the calendar event added to both you and your invitee's calendars."
        >
          <Select placeholder="Add a location" onChange={handleChangeLocation}>
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
        <FormButtonBlock previousLink={previousLink} />
      </WrapperFormFooter>
    </Form>
  );
}

export default EventTypeMainForm;
