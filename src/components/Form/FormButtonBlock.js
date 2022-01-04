import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "antd";
import styled from "styled-components";

const WrapperFormButtons = styled.div`
  margin-left: auto;
`;

const FormButtonBlock = (props) => {
  const navigate = useNavigate();
  return (
    <WrapperFormButtons>
      <Form.Item style={{ marginBottom: "0" }}>
        <Button type="text" shape="round" onClick={() => navigate(props.previousLink)}>
          Cancel
        </Button>
        <Button type="primary" shape="round" htmlType="submit">
          Next
        </Button>
      </Form.Item>
    </WrapperFormButtons>
  );
}

export default FormButtonBlock;
