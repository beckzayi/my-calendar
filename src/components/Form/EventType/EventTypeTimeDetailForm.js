import React, { useState, useEffect } from "react";
import {
  Form,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Table,
  TimePicker,
  message } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styled from "styled-components";
import axios from "axios";
import FormButtonBlock from "../FormButtonBlock";

const WrapperFormHeader = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
`;

const WrapperFormFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #d0d0d0;
  display: flex;
`;

const WrapperFieldSet = styled.div`
  padding: 32px 24px;
  border-bottom: ${props => props.borderBottom ? "1px solid #d0d0d0" : "none" };
`;

const GridFieldSet = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template: 'title description' 'content description' / 500fr 350fr;
`;

const WrapperHeading = styled.h2`
  grid-area: title;
  font-size: 1rem;
  font-weight: bold;
  line-height: 22px;
  margin-bottom: 12px;
`;

const WrapperDescription = styled.div`
  grid-area: description;
  color: grey;
  font-size: 1rem;
`;

const WrapperContent = styled.div`
  grid-area: content;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  margin-bottom: 12px;
  display: inline-block;
`;

const WrapperRuleSchedule = styled.div`
  margin-top: 32px;
`;

const StyledRuleScheduleHours = styled.div`
  border-radius: 6px;
  border: 1px solid #cccccc;
  padding: 16px 20px 16px 20px;
  margin-top: 20px;
`;

const WrapperTd = styled.td`
  padding: 16px;
`;

const FormSummary = () => (
  <div>
    <div>What can people book this event?</div>
  </div>
);

const BookingRangeContent = () => {
  const { Item } = Form;
  return (
    <div>
      <StyledLabel>Invitees can schedule...</StyledLabel>
      
      <Item name="calendar_days" label="Within a range">
        <DatePicker.RangePicker />
      </Item>
    </div>
  );
}

const BookingRangeFieldSet = () => {
  return (
    <WrapperFieldSet borderBottom className="booking_range_fieldset">
      <GridFieldSet>
        <WrapperHeading>Date Range</WrapperHeading>
        <WrapperDescription>Set a range of dates when you can accept meetings.</WrapperDescription>
        <WrapperContent>
          <BookingRangeContent />
        </WrapperContent>
      </GridFieldSet>
    </WrapperFieldSet>
  );
}

const DurationContent = () => {
  const { Item } = Form;
  const { Option } = Select;
  return (
    <div>
      <Item name="duration">
        <Select style={{ width: "60%" }}>
          <Option value={15}>15 min</Option>
          <Option value={30}>30 min</Option>
          <Option value={45}>45 min</Option>
          <Option value={60}>60 min</Option>
          <Option value={90}>1 h 30 min</Option>
          <Option value={120}>2 hrs</Option>
          <Option value={180}>3 hrs</Option>
          <Option value={240}>4 hrs</Option>
        </Select>
      </Item>
    </div>
  );
}

const DurationFieldSet = () => {
  return (
    <WrapperFieldSet borderBottom className="duration_fieldset">
      <GridFieldSet>
        <WrapperHeading>Duration</WrapperHeading>
        <WrapperDescription>Define how long your event will be. It can be as long as 12 hours.</WrapperDescription>
        <WrapperContent>
          <DurationContent />
        </WrapperContent>
      </GridFieldSet>
    </WrapperFieldSet>
  );
}

const RuleContent = () => {
  const [rule, setRule] = useState(1);

  const handleRuleChange = (e) => {
    setRule(e.target.value);
  }

  return (
    <div>
      <Radio.Group value={rule} onChange={handleRuleChange}>
        <Radio.Button value={1} style={{ marginRight: 10 }}>Using an existing schedule</Radio.Button>
        <Radio.Button value={2}>Set custom hours</Radio.Button>
      </Radio.Group>

      <WrapperRuleSchedule>
        {rule === 1 ? <RuleExistingSchedule /> : <RuleCustomSchedule />}
      </WrapperRuleSchedule>
    </div>
  );
}

const RuleFieldSet = () => {
  return (
    <WrapperFieldSet className="rule">
      <GridFieldSet>
        <WrapperHeading>How do you want to offer your availability for this event type?</WrapperHeading>
        <WrapperDescription>Select one of your schedules or define custom hours specific to this type of event.</WrapperDescription>
        <WrapperContent>
          <RuleContent />
        </WrapperContent>
      </GridFieldSet>
    </WrapperFieldSet>
  );
}

const RuleExistingSchedule = () => {
  const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
  const url = "/data/workingHours.json";

  const [dataSource, setDataSource] = useState(null);
  const columns = [
    { title: "day", dataIndex: "day", key: "day", render: text => <strong>{text.toUpperCase()}</strong> },
    { title: "start", dataIndex: "start", key: "start" },
    { title: "end", dataIndex: "end", key: "end" }
  ];

  useEffect(() => {
    const fetchData = (url) => {
      axios.get(url).then((response) => setDataSource(response.data.map((item, index) => {
        item.key = index;
        return item;
      })))
    }
    fetchData(url);
  }, [url]);

  return (
    <div>
      <div>
        <GlobalOutlined style={{ marginRight: 10 }} />{getTimeZone()}
      </div>
      <StyledRuleScheduleHours>
        <div style={{ padding: "6px 14px" }}>
          <strong>WEEKLY HOURS</strong>
        </div>
        {dataSource && <Table dataSource={dataSource} columns={columns} showHeader={false} pagination={false} />}
      </StyledRuleScheduleHours>
    </div>
  );
}

const renderOptions = () => {
  const options = [];
  for (let i = 0; i < 24; i++) {
    let hour = i < 10 ? "0" + i : i + "";
    for (let k = 0; k < 60; k = k + 15) {
      let min = k === 0 ? "00" : k + "";
      options.push(
        <Select.Option value={`${hour}:${min}`} key={i * 60 + k}>
          {`${hour}:${min}`}
        </Select.Option>
      )
    }
  }
  return options;
}

const RuleDay = ({ day, start, end }) => {
  const [checked, setChecked] = useState((start && end) ? true : false);
  const [startTime, setStartTime] = useState(start);
  const [endTime, setEndTime] = useState(end);
  const [error, setError] = useState(false);

  const onChangeCheck = (e) => {
    setChecked(e.target.checked);
  }

  const onChangeStartTime = (value) => {
    setStartTime(value);
    if (isTimeError(value, endTime)) {
      return setError(true);
    }
    return  setError(false);
  }

  const onChangeEndTime = (value) => {
    setEndTime(value);
    if (isTimeError(startTime, value)) {
      return setError(true);
    }
    return setError(false);
  }

  const isTimeError = (start, end) => {
    return (start >= end);
  }

  return (
    <>
      <WrapperTd>
        <Checkbox checked={checked} onChange={onChangeCheck} />
      </WrapperTd>
      <WrapperTd style={{ width: "80px" }}>
        <strong>{day.toUpperCase()}</strong>
      </WrapperTd>
      
      <WrapperTd>
        {checked ? 
          <Form.Item name={`start-${day}`} noStyle>
            <Select style={{ width: 80 }} onChange={onChangeStartTime}>
              {renderOptions()}
            </Select>
          </Form.Item>
          : "Unavailable"
        }
      </WrapperTd>
      <WrapperTd>
        {checked ?
          <Form.Item name={`end-${day}`} noStyle>
            <Select style={{ width: 80 }} onChange={onChangeEndTime}>
              {renderOptions()}
            </Select>
          </Form.Item>
          : " "
        }
      </WrapperTd>
    
      {error && <div style={{ paddingLeft: "20px", color: "#ff4d4f" }}>Choose an end time later than the start time</div>}
    </>
  );
}

const RuleCustomSchedule = () => {
  /**
   * TODO: retrieve hours from the eventType object instead of customerHours.json
   */
  const url = "/data/customHours.json";

  const [dataSource, setDataSource] = useState(null);

  useEffect(() => {
    const fetchData = (url) => {
      axios.get(url).then((response) => setDataSource(response.data.map((item, index) => {
        item.key = index;
        return item;
      })))
    }
    fetchData(url);
  }, [url]);

  return (
    <div>
      <StyledRuleScheduleHours>
        <h4>Set your weekly hours</h4>
        <div>
          <table>
            <tbody>
              {dataSource && dataSource.map((item, index) => {
                return (
                  <tr key={index}>
                    <RuleDay {...item} />
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </StyledRuleScheduleHours>
    </div>
  );
}

const EventTypeTimeDetailForm = (props) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("handleSubmit", values);
  }

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="horizontal"
      initialValues={props.eventType}
    >
      <WrapperFormHeader>
        <FormSummary />
        <FormButtonBlock />
      </WrapperFormHeader>

      <BookingRangeFieldSet />
      <DurationFieldSet />
      <RuleFieldSet {...props} />

      <WrapperFormFooter>
        <FormButtonBlock />
      </WrapperFormFooter>
    </Form>
  );
}

export default EventTypeTimeDetailForm;
