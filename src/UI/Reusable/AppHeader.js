// @flow
import * as React from 'react';
import { Header } from 'antd/es/layout/layout';
import { Avatar } from 'antd';

export const AppHeader = ({ headerTitle }) => {
  return (
    <Header className="app_header">
      <div>{headerTitle}</div>
      <Avatar
        className="app_header_avatar"
        size="large"
        // gap={gap}
      >
        A
      </Avatar>
    </Header>
  );
};
