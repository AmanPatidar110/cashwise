// @flow
import { Button, Space, Table } from 'antd';
import * as React from 'react';

import editIcon from '../../../../../static/icons/edit.svg';
import deleteIcon from '../../../../../static/icons/delete.svg';
import invoiceIcon from '../../../../../static/icons/receipt.svg';

import { grey } from '@mui/material/colors';

export const ActiveClients = ({
  activeClients,
  rowSelection,
  selectedRowKeys,
  handleSelectionDelete,
  handleEditClient,
  handleSingleDeleteClient,
}) => {
  const isTabletOrMobile = window.innerWidth <= 768;
  const isSmallMobileHeight = window.innerHeight < 812;

  const columns = [
    {
      key: 'clientName',
      title: 'Client Name',
      dataIndex: 'clientName',
      width: 120,
    },
    {
      key: 'phone',
      title: 'Phone',
      dataIndex: 'phone',
      width: 150,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      width: 180,
    },
    {
      key: 'taxId',
      title: 'GSTIN/Tax ID',
      dataIndex: 'taxId',
      render: (text) => text || '-',
      width: 120,
    },
    {
      key: 'panNumber',
      title: 'PAN',
      dataIndex: 'panNumber',
      render: (text) => text || '-',
      width: 120,
    },
    {
      key: 'country',
      title: 'Country',
      dataIndex: 'country',
      width: 100,
    },
    {
      key: 'action',
      title: '',
      dataIndex: 'action',
      width: 200,
      render: (text, record) => (
        <Space size={25}>
          <div className="list_action" onClick={() => handleEditClient(record)}>
            <div className="list_action_icon">
              <img width={'100%'} height={'100%'} src={editIcon}></img>
            </div>
            <div className="list_action_text">Edit</div>
          </div>
          <div className="list_action">
            <div className="list_action_icon">
              <img width={'100%'} height={'100%'} src={invoiceIcon}></img>
            </div>
            <div className="list_action_text">Create Invoice</div>
          </div>
          <div
            className="list_action"
            onClick={() => handleSingleDeleteClient(record.key)}
          >
            <div className="list_action_icon list_action_delete">
              <img width={'100%'} height={'100%'} src={deleteIcon}></img>
            </div>
            <div className="list_action_text">Delete</div>
          </div>
        </Space>
      ),
    },
  ];

  const hasSelected = selectedRowKeys?.length > 0;

  return (
    <div className="active_clients">
      <div>
        <Button
          onClick={handleSelectionDelete}
          disabled={!hasSelected}
          //   loading={loading}
          className="active_clients_delete_button"
        >
          Delete
        </Button>
        <span
          style={{
            marginLeft: 8,
            color: 'gray',
            fontSize: 12,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div
        style={{
          width: '100%',
          height: isSmallMobileHeight ? '90%' : '95%',
          marginTop: 10,
        }}
      >
        <Table
          size="small"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={activeClients}
          rootClassName="active_clients_table_row"
          scroll={{ y: isSmallMobileHeight ? '90%' : '97%' }}
          style={{ width: '100%', height: '95%' }}
          pagination={false}
        />
      </div>
    </div>
  );
};
