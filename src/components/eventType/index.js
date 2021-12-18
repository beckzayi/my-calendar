import React from "react";
import { Space, Row, Col } from "antd";
import AddEventButton from "./AddEventButton";
import EventCard from "./EventCard";

const data = [
  {
    id: "001",
    title: "Dev Catch-up",
    duration: "1 hr",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up"
  },
  {
    id: "002",
    title: "Client Call",
    duration: "30 mins",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up"
  },
  {
    id: "003",
    title: "15 Minute Meeting",
    duration: "15 mins",
    eventType: "One-on-One",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up"
  },
  {
    id: "004",
    title: "30 Minute Meeting",
    duration: "30 mins",
    eventType: "Group",
    bookingLink: "https://calendly.com/beckzayi/dev-catch-up"
  }
];

export default () => {
  return (
    <Space direction="vertical" size="large">
      <div>
        <AddEventButton />
      </div>
      <div className="site-card-wrapper">
        <Row gutter={[16, 24]}>
          {data.map(({ id, title, duration, eventType, bookingLink }) => (
            <Col span={8} key={id}>
              <EventCard
                title={title}
                duration={duration}
                eventType={eventType}
                bookingLink={bookingLink}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Space>
  );
};
