import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

const Header = () => (
  <div>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home">
        <Link to="/event_types">Home</Link>
      </Menu.Item>
      {/* TODO: route availability */}
      <Menu.Item key="availability">
        <Link to="/event_types/new">Availability</Link>
      </Menu.Item>
      {/* TODO: route account */}
      <SubMenu key="account" title="Account">
        <Menu.Item key="setting:1">
          <Link to="/event_types/new">Account Settings</Link>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <Link to="/event_types/new">Billing</Link>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <Link to="/event_types/new">Admin Management</Link>
        </Menu.Item>
        <Menu.Item key="setting:4">
          <Link to="/event_types/new">Logout</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </div>
);

export default Header;
