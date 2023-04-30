// @flow
import { Card, Tabs } from 'antd';
import { Content } from 'antd/es/layout/layout';
import * as React from 'react';

export const AppContent = ({ children }) => {
  return (
    <Content className="app_content">
      <Card className="app_content_card" hoverable>
        {children}
      </Card>
    </Content>
  );
};
