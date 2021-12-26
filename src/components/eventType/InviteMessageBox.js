import React from "react";
import { Alert, Button } from "antd";
import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = () => {
  const handleClick = () => {
    console.log("InviteMessage");
  }
  return (
    <StyledMessage>
      <div>
        <strong>Want to host shared events with others?</strong> Add members to your account
      </div>
      <div>
        <Button
          type="primary"
          ghost={true}
          shape="round"
          onClick={handleClick}>
          Invite members
        </Button>
      </div>
    </StyledMessage>
  );
}

const InviteMessageBox = () => {
  return (
    <Alert
      description={<Message />}
      type="info"
    />
  );
}

export default InviteMessageBox;

