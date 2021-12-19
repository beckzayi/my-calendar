import React, { useState } from "react";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";

export default ({ link }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    // Copy text to clipboard
    navigator.clipboard
      .writeText(link)
      .then(() => setTimeout(() => setCopied(false), 2500));
  };

  return (
    <div onClick={handleClick}>
      {copied ? (
        <span>
          <CheckOutlined style={{ marginRight: "4px" }} /> Copied
        </span>
      ) : (
        <span>
          <CopyOutlined style={{ marginRight: "4px" }} /> Copy Link
        </span>
      )}
    </div>
  );
};
