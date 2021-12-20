import React from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const AddEventButton = () => {
  const handleClick = () => {
    console.log("AddEventButton");
  };

  return (
    <Button
      type="primary"
      ghost
      icon={<PlusCircleFilled />}
      onClick={handleClick}
    >
      New Event Type
    </Button>
  );
};

export default AddEventButton;
