// @flow
import { Button, Space, Table } from 'antd';
import * as React from 'react';

import EditNoteIcon from '@mui/icons-material/EditNote';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const ActiveClients = ({
  activeClients,
  rowSelection,
  selectedRowKeys,
  handleSelectionDelete,
  handleEditClient,
  handleSingleDeleteClient,
}) => {
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
      width: 150,
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
        <Space size="middle">
          <div className="list_action" onClick={() => handleEditClient(record)}>
            <div className="list_action_icon">
              <EditNoteIcon />
            </div>
            <div className="list_action_text">Edit</div>
          </div>
          <div className="list_action">
            <div className="list_action_icon">
              <ReceiptLongIcon />
            </div>
            <div className="list_action_text">Create Invoice</div>
          </div>
          <div
            className="list_action"
            onClick={() => handleSingleDeleteClient(record.key)}
          >
            <div className="list_action_icon">
              <DeleteOutlineOutlinedIcon />
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
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div style={{ height: 400 }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={activeClients}
          rootClassName="active_clients_table_row"
          scroll={{ y: 350 }}
        />
      </div>
    </div>
  );
};
