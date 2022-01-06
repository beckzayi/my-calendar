import React from "react";
import Container from "../../Layout/Container";
import WrapperContainer from "../../Wrapper/WrapperContainer";
import SubHeader from "../../Layout/SubHeader";
import EventTypeMainForm from "../../Form/EventType/EventTypeMainForm";
import StyledWrapperForm from "../../Wrapper/StyledWrapperForm";

const pageTitle = "Create One-on-One Event Type",
  previousLink = "/event_types/new";

const CreateOneOnOne = () => {
  return (
    <div>
      <SubHeader pageTitle={pageTitle} previousLink={previousLink} />
      <Container>
        <WrapperContainer>
          <StyledWrapperForm>
            <EventTypeMainForm previousLink={previousLink} />
          </StyledWrapperForm>
        </WrapperContainer>
      </Container>
    </div>
  )
};

export default CreateOneOnOne;
