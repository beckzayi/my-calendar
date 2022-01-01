import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Divider, Spin, Alert } from "antd";
import _debounce from 'lodash/debounce';
import AddEventButton from "./AddEventButton";
import EventTypeCard from "./EventTypeCard";
import HomeMenu from "../Menu/HomeMenu";
import Container from "../Layout/Container";
import WrapperHomeMenu from "../Wrapper/WrapperHomeMenu";
import WrapperContainer from "../Wrapper/WrapperContainer";
import InputSearch from "../Input/Search";
import httpRequest from "../../util/ajax/request";
import { retrieveEventTypes, findEventTypesByTitle } from "../../state/actions/eventType";

const url = "data/eventTypes.json";

const EventTypes = () => {
  const dispatch = useDispatch();
  const eventTypes = useSelector(state => state.eventType);

  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const onChange = function(e) {
    setIsLoading(true);
    const { value } = e.target;

    // Mock ajax request delay
    setTimeout(function(){
      /* TODO: need to set up backend API endpoint to retrieve all event types by title, then dispatch(retrieveEventTypes(response.data)) */
      dispatch(findEventTypesByTitle(value));
      setIsLoading(false);
    }, 1500);
  }

  

  useEffect(() => {
    /**
     * TODO: wrap axios fetch in a file `useAxiosFetch`and return an object with `data`, `fetchError`, and `isLoading`
     * https://github.com/gitdagray/react_custom_hooks/blob/main/src/hooks/useAxiosFetch.js
     * https://www.youtube.com/watch?v=tBuceoEGFhI
     * https://www.robinwieruch.de/react-hooks-fetch-data/
     */
    const fetchData = (url, method = "get") => {
      setIsLoading(true);
      httpRequest(url, method)
        .then(response => {
          dispatch(retrieveEventTypes(response.data));
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          setFetchError(error.message);
        });
    }

    fetchData(url, "get");
  }, [dispatch]);

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
            {renderContent(eventTypes)}
          </div>
        </WrapperContainer>
      </Container>
    </div>
  );
};

export default EventTypes;
