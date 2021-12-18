import React from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

export default () => {
  const handleClick = () => {
    console.log("AddEventButton");
  };

  return (
    <Button type="primary" icon={<PlusCircleFilled />} onClick={handleClick}>
      New Event Type
    </Button>
  );
};
