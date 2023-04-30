// @flow
import { Tabs } from 'antd';
import * as React from 'react';
import { ActiveClients } from './Tabs/ActiveClientsUI';
import { DeletedClients } from './Tabs/DeletedClients';

export const ClientsUI = ({
  activeClients,
  deletedClients,
  rowSelection,
  selectedRowKeys,
  handleSelectionDelete,
  handleSingleDeleteClient,
  handleEditClient
}) => {
  const items = [
    {
      key: '1',
      label: `Active Clients`,
      children: (
        <ActiveClients
          key={1}
          activeClients={activeClients}
          rowSelection={rowSelection}
          selectedRowKeys={selectedRowKeys}
          handleSelectionDelete={handleSelectionDelete}
          handleSingleDeleteClient={handleSingleDeleteClient}
          handleEditClient={handleEditClient}
        />
      ),
    },
    {
      key: '2',
      label: `Deleted Clients`,
      children: (
        <DeletedClients
          key={2}
          deletedClients={deletedClients}
          rowSelection={rowSelection}
        />
      ),
    },
  ];
  return (
    <Tabs
      className="clients_tabs"
      defaultActiveKey="1"
      items={items}
      // onChange={onChange}
    />
  );
};
