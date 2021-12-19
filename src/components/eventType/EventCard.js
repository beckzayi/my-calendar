import React from "react";
import { Card, Row, Col, Button, Menu, Dropdown, Switch } from "antd";
import { EditOutlined, CopyOutlined, DeleteOutlined, SettingOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CopyLink from "./CopyLink";

const StyledCard = styled.div`
  position: relative;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-top: 5px solid #5864fe;
  &:hover {
    top: -2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  }
`;

const StyledInfo = styled.div`
  color: gray;
  cursor: pointer;
`;

const WrapperBookingLink = styled.div`
  padding-bottom: 20px;
`;

const WrapperShare = styled.div`
  font-size: 0.875rem;
  color: #1890ff;
  padding: 12px 0;
`;

const menu = (id) => (
  <Menu style={{ width: '160px', boxShadow: '0 1px 6px rgb(0 0 0 / 20%)' }}>
    <Menu.Item key="0" style={{ padding: '8px 14px' }}>
      <a href={`/event_types/edit/${id}`}><EditOutlined style={{ marginRight: '10px' }} /> Edit</a>
    </Menu.Item>
    <Menu.Item key="1" style={{ padding: '8px 14px' }}>
      <a href={`/event_types/clone/${id}`}><CopyOutlined style={{ marginRight: '10px' }} /> Clone</a>
    </Menu.Item>
    <Menu.Item key="2" style={{ padding: '8px 14px' }}>
      <a href={`/event_types/delete/${id}`}><DeleteOutlined style={{ marginRight: '10px' }} /> Delete</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2" style={{ padding: '8px 14px' }}>
      <Row justify="space-between" align="middle">
        <Col>On/Off</Col>
        <Col>
          <Switch
            size="small"
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={true}
          />
        </Col>
      </Row>
    </Menu.Item>
  </Menu>
);

export default ({ id, title, duration, eventType, bookingLink }) => (
  <StyledCard>
    <Card title={title}>
      <Row justify="space-between" align="middle">
        <Col>
          <StyledInfo>
            {duration}, {eventType}
          </StyledInfo>
        </Col>
        <Col>
          <Dropdown overlay={() => menu(id)} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}><SettingOutlined /></a>
          </Dropdown>
        </Col>
      </Row>

      <WrapperBookingLink>
        <a href={bookingLink} target="_blank" rel="noreferrer">
          View booking page
        </a>
      </WrapperBookingLink>

      <WrapperShare>
        <Row justify="space-between" align="middle">
          <Col>
            <CopyLink link={bookingLink} />
          </Col>
          <Col>
            <Button type="primary" ghost shape="round" size="small">
              Share
            </Button>
          </Col>
        </Row>
      </WrapperShare>
    </Card>
  </StyledCard>
);
