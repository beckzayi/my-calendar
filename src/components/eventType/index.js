import React from "react";
import { Row, Col, Divider } from "antd";
import styled from "styled-components";
import AddEventButton from "./AddEventButton";
import EventCard from "./EventCard";
import HomeMenu from "../Menu/HomeMenu";
import Container from "../Layout/Container";
import WrapperHomeMenu from "../Wrapper/WrapperHomeMenu";

const data = [
  {
    id: "001",
    title: "Dev Catch-up",
    duration: "1 hr",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up",
    active: true
  },
  {
    id: "002",
    title: "Client Call",
    duration: "30 mins",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up",
    active: true
  },
  {
    id: "003",
    title: "15 Minute Meeting",
    duration: "15 mins",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up",
    active: false
  },
  {
    id: "004",
    title: "30 Minute Meeting",
    duration: "30 mins",
    eventType: "Group",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up",
    active: false
  }
];

const WrapperContainer = styled.div`
  margin-top: 30px;
  padding: 0 20px;
`;

const EventTypes = () => {
  return (
    <div>
      <WrapperHomeMenu>
        <Container>
          <HomeMenu />
        </Container>
      </WrapperHomeMenu>
      
      <Container>
        <WrapperContainer>
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
              {data.map(({ id, title, duration, eventType, bookingLink, active }) => (
                <Col span={8} key={id}>
                  <EventCard
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
