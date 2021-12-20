import React, { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: ${props => props.active ? 'pointer': 'normal'};
`;

const CopyLink = ({ link, active }) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    if (!active) {
      e.preventDefault();
      return;
    }
    // Copy text to clipboard
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => setError(true));
  };

  if (error) {
    return <Wrapper>Something Wrong</Wrapper>;
  }

  return (
    <Wrapper onClick={handleClick} active={active}>
      {copied ? (
        <span>
          <CheckOutlined style={{ marginRight: "4px" }} /> Copied
        </span>
      ) : (
        <span>
          <CopyOutlined style={{ marginRight: "4px" }} /> Copy Link
        </span>
      )}
    </Wrapper>
  );
};

export default CopyLink;
