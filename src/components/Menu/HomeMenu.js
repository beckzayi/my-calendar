import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const HomeMenu = () => {
  const location = useLocation();

  const [current, setCurrent] = useState(null);

  const handleClick = (e) => {
    setCurrent(e.key);
  }

  useEffect(() => {
    setCurrent(location.pathname.substring(1));
  }, [location.pathname]);

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="event_types">
        <Link to={"/event_types"}>Event Types</Link>
      </Menu.Item>
      <Menu.Item key="scheduled_events">
        <Link to={"/scheduled_events"}>Scheduled Events</Link>
      </Menu.Item>
    </Menu>
  );
}

export default HomeMenu;
