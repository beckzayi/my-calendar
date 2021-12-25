import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Spin, Alert } from "antd";
import _debounce from 'lodash/debounce';
import request from "../../util/ajax/request";
import AddEventButton from "./AddEventButton";
import EventTypeCard from "./EventTypeCard";
import HomeMenu from "../Menu/HomeMenu";
import Container from "../Layout/Container";
import WrapperHomeMenu from "../Wrapper/WrapperHomeMenu";
import WrapperContainer from "../Wrapper/WrapperContainer";
import InputSearch from "../Input/Search";

const url = "data/eventTypes.json";

const EventTypes = () => {
  // the original data
  const [data, setData] = useState(null);

  const [types, setTypes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const onChange = function(e) {
    setIsLoading(true);
    const { value } = e.target;

    // Mock ajax request delay
    setTimeout(function(){
      const filteredTypes = data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
      setTypes(filteredTypes);
      setIsLoading(false);
    }, 1500);
  }

  /* TODO: wrap axios fetch in a file `useAxiosFetch`and return an object with `data`, `fetchError`, and `isLoading` */
  const fetchData = (url, method = "get") => {
    setIsLoading(true);
    request(url, method)
      .then(response => {
        setTypes(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setFetchError(error.message);
      });
  }

  useEffect(() => {
    fetchData(url, "get");
  }, []);

  const renderContent = (types) => {
    if (isLoading) {
      return (
        <Spin tip="Loading..." size="large" style={{
          position: "absolute",
          left: "50%",
          marginLeft: "-12px",
          top: "50%",
          marginTop: "-15px"
        }} />
      );
    }
    if (fetchError) {
      return (
        <Alert
          message="Error"
          description={`Sorry, something is wrong. ${fetchError}`}
          type="error"
          showIcon
        />
      );
    }
    return (
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
    );
  }

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

          <div className="site-card-wrapper" style={{ position: 'relative' }}>
            {renderContent(types)}
          </div>
        </WrapperContainer>
      </Container>
    </div>
  );
};

export default EventTypes;
