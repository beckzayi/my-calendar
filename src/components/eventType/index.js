import React, { useState, useEffect } from "react";
import { Row, Col, Divider } from "antd";
import _debounce from 'lodash/debounce';
import request from "../../util/ajax/request";
import AddEventButton from "./AddEventButton";
import EventTypeCard from "./EventTypeCard";
import HomeMenu from "../Menu/HomeMenu";
import Container from "../Layout/Container";
import WrapperHomeMenu from "../Wrapper/WrapperHomeMenu";
import WrapperContainer from "../Wrapper/WrapperContainer";
import InputSearch from "../Input/Search";

const EventTypes = () => {
  const [types, setTypes] = useState(null);
  // the original data
  const [data, setData] = useState(null);

  const onChange = function(e) {
    const { value } = e.target;
    const filteredTypes = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    setTypes(filteredTypes);
  }

  const fetchData = (url, method = "get") => {
    request(url, method)
      .then(response => {
        setTypes(response.data);
        setData(response.data);
      });
  }

  useEffect(() => {
    fetchData("data/eventTypes.json", 'get');
  }, []);

  return (
    <div>
      <WrapperHomeMenu>
        <Container>
          <HomeMenu />
        </Container>
      </WrapperHomeMenu>
      
      <Container>
        <WrapperContainer>
          <Row>
            <Col>
              <InputSearch onChange={_debounce(onChange, 250)} />
            </Col>
          </Row>
          <Row justify="space-between">
            <Col span={4}>
              <div>John Doe</div>
              <div>
                <a
                  href="https://calendly.com/beckzayi"
                  target="_blank"
                  rel="noreferrer"
                >
                  calendly.com/beckzayi
                </a>
              </div>
            </Col>
            <Col span={4} key="add_event_button" style={{ textAlign: "right" }}>
              <AddEventButton />
            </Col>
          </Row>

          <Divider />

          <div className="site-card-wrapper">
            <Row gutter={[24, 24]}>
              {types && types.map(({ id, title, duration, eventType, bookingLink, active }) => (
                <Col span={8} key={id}>
                  <EventTypeCard
                    id={id}
                    title={title}
                    duration={duration}
                    eventType={eventType}
                    bookingLink={bookingLink}
                    active={active}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </WrapperContainer>
      </Container>
    </div>
  );
};

export default EventTypes;
