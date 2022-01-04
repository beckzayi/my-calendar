import React from "react";
import Container from "../../Layout/Container";
import WrapperContainer from "../../Wrapper/WrapperContainer";
import SubHeader from "../../Layout/SubHeader";
import EventTypeMainForm from "../../Form/EventType/EventTypeMainForm";

const pageTitle = "Create One-on-One Event Type",
  previousLink = "/event_types/new";

const CreateOneOnOne = () => {
  return (
    <div>
      <SubHeader pageTitle={pageTitle} previousLink={previousLink} />
      <Container>
        <WrapperContainer>
          <EventTypeMainForm previousLink={previousLink} />
        </WrapperContainer>
      </Container>
    </div>
  )
};

export default CreateOneOnOne;
