import React, { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const CopyLink = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    // Copy text to clipboard
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch((err) => setError(true));
  };

  if (error) {
    return <Wrapper>Something Wrong</Wrapper>;
  }

  return (
    <Wrapper onClick={handleClick}>
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
