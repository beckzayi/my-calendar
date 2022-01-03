import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import Container from "../../Layout/Container";
import WrapperContainer from "../../Wrapper/WrapperContainer";
import SubHeader from "../../Layout/SubHeader";
import EventTypeGeneral from "./EventTypeGeneral";
import EventTypeTimeDetail from "./EventTypeTimeDetail";
import httpRequest from "../../../util/ajax/request";

const url = "/data/eventTypes.json";

const EditOneOnOne = () => {
  const { id } = useParams(),
    eventTypes = useSelector(state => state.eventType);

  const [isLoading, setIsLoading] = useState(false);
  const [eventType, setEventType] = useState(null);

  useEffect(() => {
    const fetchData = (url) => {
      setIsLoading(true);
      let target;
      if (eventTypes.length === 0) {
        httpRequest(url, "get")
          .then(response => {
            const { data } = response;
            target = data.find(evt => evt.id == id);
            setEventType(target);
            setIsLoading(false);
          });
      } else {
        target = eventTypes.find(evt => evt.id == id);
        setEventType(target);
        setIsLoading(false);
      }
    }

    fetchData(url);
  }, []);

  const renderContent = (eventType) => {
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

    return (
      <Container>
        <WrapperContainer>
          <EventTypeGeneral eventType={eventType} />
          <EventTypeTimeDetail />
        </WrapperContainer>
      </Container>
    )
  }

  return (
    <div>
      <SubHeader pageTitle="Edit One-on-One Event Type" link="/event_types" />

      {renderContent(eventType)}
    </div>
  )
}

export default EditOneOnOne;
