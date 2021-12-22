import React from "react";
import { Link } from "react-router-dom";
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
      <span><Link to="/event_types/new">New Event Type</Link></span>
    </Button>
  );
};

export default AddEventButton;
