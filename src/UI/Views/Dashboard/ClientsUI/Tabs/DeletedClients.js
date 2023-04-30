// @flow
import { Table } from 'antd';
import * as React from 'react';

const columns = [
  {
    title: 'Client Name',
    dataIndex: 'clientName',
    width: 120,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 180,
  },
  {
    title: 'GSTIN/Tax ID',
    dataIndex: 'taxId',
    render: (text) => text || '-',
    width: 150,
  },
  {
    title: 'PAN',
    dataIndex: 'panNumber',
    render: (text) => text || '-',
    width: 120,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    width: 100,
  },
];

export const DeletedClients = ({ deletedClients }) => {
  const isTabletOrMobile = window.innerWidth <= 768;

  return (
    <Table
      rootClassName="deleted_clients_table_row"
      columns={columns}
      dataSource={deletedClients}
      scroll={{ y: isTabletOrMobile ? '58vh' : '50vh' }}
      pagination={{
        position: ['topRight'],
      }}
    />
  );
};
