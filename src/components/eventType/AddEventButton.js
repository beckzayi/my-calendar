import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const AddEventButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("AddEventButton");
    navigate("/event_types/new");
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
