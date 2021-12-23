import React from "react";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from "styled-components";

const borderColor = {
  borderColor: "#f0f0f0"
};

const style = {
  ...borderColor,
  width: "200px"
};

const WrapperInputSearch = styled.div`
  margin-bottom: 24px;
`;

const InputSearch = function({ onChange }) {
  return (
    <WrapperInputSearch>
      <Input.Group compact>
        <Button icon={<SearchOutlined />} style={ borderColor } />
        <Input placeholder="Filter" onChange={onChange} style={ style } />
      </Input.Group>
    </WrapperInputSearch>
  );
}

export default InputSearch;
