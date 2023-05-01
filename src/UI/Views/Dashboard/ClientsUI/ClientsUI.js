// @flow
import { Button, Space, Tabs } from 'antd';
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
  handleEditClient,
  activeTab,
  setActiveTab,
}) => {
  console.log('activeTab', activeTab);
  return (
    // <Tabs
    //   className="clients_tabs"
    //   defaultActiveKey="1"
    //   items={items}
    //   // onChange={onChange}
    // />
    <div className="clients_tabs">
      <Space size={40}>
        <Button
          onClick={() => {
            setActiveTab('1');
          }}
          type="ghost"
          className={`clients_tabs_button ${
            activeTab === '1' ? 'clients_tabs_active_tab' : ''
          }`}
        >
          Active Clients
        </Button>
        <Button
          onClick={() => {
            setActiveTab('2');
          }}
          type="ghost"
          className={`clients_tabs_button ${
            activeTab === '2' ? 'clients_tabs_active_tab' : ''
          }`}
        >
          Deleted Clients
        </Button>
      </Space>
      <div className="clients_tabs_container">
        {activeTab === '1' ? (
          <ActiveClients
            activeClients={activeClients}
            rowSelection={rowSelection}
            selectedRowKeys={selectedRowKeys}
            handleSelectionDelete={handleSelectionDelete}
            handleSingleDeleteClient={handleSingleDeleteClient}
            handleEditClient={handleEditClient}
          />
        ) : (
          <DeletedClients
            deletedClients={deletedClients}
            rowSelection={rowSelection}
          />
        )}
      </div>
    </div>
  );
};
