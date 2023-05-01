// @flow
import Sider from 'antd/es/layout/Sider';
import * as React from 'react';
import { Menu, Typography } from 'antd';
import SettingsIcon from '@mui/icons-material/Settings';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import InvoiceIcon from '../../static/icons/receipt_white.svg';
import Logo from '../../static/logo.svg';
import { CloudDoneOutlined, SettingsOutlined } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

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
  getItem(
    'Document Generation',
    '1',
    <NoteAddIcon style={{ width: '24px', height: '24px' }} />
  ),
  getItem(
    'Document Storage',
    '2',
    <CloudDoneOutlined style={{ width: '24px', height: '24px' }} />,
    [
      getItem('Documents 1', '3'),
      getItem('Documents 1', '4'),
      getItem('Documents 1', '5'),
    ]
  ),
  getItem(
    'Invoice Management',
    '6',
    // <div className="list_action_icon">
    <img
      style={{ width: '24px', height: '24px', color: 'white' }}
      src={InvoiceIcon}
    ></img>,
    // </div>
    [
      getItem('New Invoice', '7'),
      getItem('Invoice Summary', '8'),
      getItem('Client List', '9'),
    ]
  ),
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
      style={{ backgroundColor: '#00204e' }}
      width={300}
      className="sidebar"
    >
      <div className="sidebar_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="company_card">
        <div span={3} className="company_card_logo">
          G
        </div>
        <div span={16}>
          <Typography className="company_card_name">Entity Name</Typography>
          <Typography style={{ marginTop: 2 }} className="company_card_website">
            Add website
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
        style={{ fontSize: '1rem' }}
      />
    </Sider>
  );
};
