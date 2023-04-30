// @flow
import Sider from 'antd/es/layout/Sider';
import * as React from 'react';
import { Button, Card, Col, Menu, Row, Typography } from 'antd';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import Logo from '../../static/logo.png';
import { SettingsOutlined } from '@mui/icons-material';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Document Generation', '1', <NoteAddIcon />),
  getItem('Document Storage', '2', <CloudDoneIcon />),
  getItem('Invoice Management', '3', <SettingsOutlined />, [
    getItem('New Invoice', '4'),
    getItem('Invoice Summary', '5'),
    getItem('Client List', '6'),
  ]),
];

export const AppSidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const onBreakpoint = (broken) => {
    setCollapsed(broken);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="md"
      onBreakpoint={onBreakpoint}
      collapsedWidth={0}
      style={{ backgroundColor: '#00204e' }}
      width={300}
      className="sidebar"
    >
      <div className="sidebar_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="company_card">
        <div span={3} className="company_card_logo">
          L
        </div>
        <div span={16}>
          <Typography className="company_card_name">Company Name</Typography>
          <Typography className="company_card_website">
            www.website.com
          </Typography>
        </div>
        <div span={4}>
          <SettingsIcon className="company_card_action" />
        </div>
      </div>
      <Menu
        className="sidebar_menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};
