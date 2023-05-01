// @flow
import * as React from 'react';
import { ActiveClients } from '../../../Views/Dashboard/ClientsUI/Tabs/ActiveClientsUI';
import { Tabs } from 'antd';
import { ClientsUI } from '../../../Views/Dashboard/ClientsUI/ClientsUI';
import { getActiveClients, getDeletedClients } from '../../../../APIs/clients';
import { AppFooter } from '../../../Reusable/AppFooter';
import { ClientsFooterUI } from '../../../Views/Dashboard/ClientsUI/Footer/ClientsFooterUI';
import { AppContent } from '../../../Reusable/AppContent';
import ClientModal from '../../../Modals/ClientModal';

export const ClientsList = () => {
  const [activeClients, setActiveClients] = React.useState([]);
  const [deletedClients, setDeletedClients] = React.useState([]);

  const [activeTab, setActiveTab] = React.useState('1');
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const [showAddClient, setShowAddClient] = React.useState({
    key: false,
    mode: '',
    data: {},
  });

  React.useEffect(() => {
    (async () => {
      const activeData = getActiveClients();
      setActiveClients(activeData);
    })();

    (async () => {
      const deletedData = getDeletedClients();
      setDeletedClients(deletedData);
    })();
  }, []);

  const rowSelection = {
    // selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.clientName === 'Disabled User',
      // Column configuration not to be checked
      name: record.clientName,
    }),
  };

  const handleSelectionDelete = () => {
    console.log('handleDelete');
    const filteredActiveClients = activeClients.filter(
      (client) => !selectedRowKeys.includes(client.key)
    );
    const filteredDeletedClients = deletedClients.concat(
      activeClients.filter((client) => selectedRowKeys.includes(client.key))
    );

    setActiveClients(filteredActiveClients);
    setDeletedClients(filteredDeletedClients);
    setSelectedRowKeys([]);
  };

  const handleSingleDeleteClient = (clientId) => {
    console.log('handleDelete');
    const filteredActiveClients = activeClients.filter(
      (client) => !clientId.includes(client.key)
    );
    const filteredDeletedClients = deletedClients.concat(
      activeClients.filter((client) => clientId.includes(client.key))
    );

    setActiveClients(filteredActiveClients);
    setDeletedClients(filteredDeletedClients);
  };

  const handleAddClient = () => {
    setShowAddClient({ key: true, mode: 'ADD', data: {} });
  };
  const handleEditClient = (client) => {
    setShowAddClient({ key: true, mode: 'EDIT', data: client });
  };

  const onClientAdded = (newClient) => {
    setActiveClients((clients) => [newClient, ...clients]);
  };
  const onClientUpdated = (updatedClient, clientId) => {
    setActiveClients((clients) => {
      const updatedClients = clients.map((client) => {
        if (client.key === clientId) {
          return updatedClient;
        }
        return client;
      });
      return updatedClients;
    });
  };
  return (
    <>
      <AppContent>
        <ClientsUI
          activeClients={activeClients}
          deletedClients={deletedClients}
          rowSelection={rowSelection}
          selectedRowKeys={selectedRowKeys}
          handleSelectionDelete={handleSelectionDelete}
          handleSingleDeleteClient={handleSingleDeleteClient}
          handleEditClient={handleEditClient}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </AppContent>
      <AppFooter>
        <ClientsFooterUI handleAddClient={handleAddClient} />
      </AppFooter>
      {showAddClient?.key ? (
        <ClientModal
          showAddClient={showAddClient}
          toggler={() => setShowAddClient({ key: false, mode: '' })}
          onClientAdded={onClientAdded}
          onClientUpdated={onClientUpdated}
        />
      ) : null}
    </>
  );
};
