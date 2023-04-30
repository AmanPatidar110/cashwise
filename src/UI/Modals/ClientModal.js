import React, { useState } from 'react';

import { Button, Form, Input, InputNumber, Modal, Select, Space } from 'antd';

import toasts from '../Helpers/toasts';
import { postClient, putClient } from '../../APIs/clients';

const ClientModal = ({
  showAddClient,
  toggler,
  onClientAdded,
  onClientUpdated,
}) => {
  const clientData = showAddClient?.data;
  const [clientDetails, setClientDetails] = useState(clientData ?? {});

  const addClient = async (ev) => {
    ev?.preventDefault?.();

    if (
      !clientDetails?.clientName ||
      !clientDetails?.country ||
      !clientDetails.email ||
      !clientDetails.panNumber ||
      !clientDetails.phone ||
      !clientDetails?.taxId
    )
      return toasts.generateError('Please enter all the fields!');

    let newClient;
    try {
      if (showAddClient?.mode === 'ADD') {
        newClient = await postClient({ ...clientDetails });
        onClientAdded?.(newClient);
      } else {
        newClient = await putClient(
          {
            ...clientDetails,
            key: undefined,
          },
          clientDetails?.key
        );
        onClientUpdated?.({ ...clientDetails }, clientDetails?.key);
      }

      toasts.generateSuccess('Client added successfully');
      toggler();
    } catch (error) {
      toasts.generateError(`Error adding new client. ${error}`);
    }
  };

  const onChange = (ev, key, value) =>
    setClientDetails((details) => ({
      ...details,
      [key ?? ev?.target?.name]: value ?? ev?.target?.value,
    }));

  console.log('PROJECT details', clientDetails, showAddClient);
  return (
    <Modal
      title={`${showAddClient?.mode === 'ADD' ? 'Add' : 'Edit'} Client`}
      open={showAddClient?.key}
      closable
      onCancel={() => toggler()}
      width={600}
      footer={[
        <Button key="ok" type="primary" onClick={addClient}>
          Save
        </Button>,
        <Button key="cancel" type="default" onClick={toggler}>
          Cancel
        </Button>,
      ]}
    >
      <Form onFinish={addClient} className="add_client_form">
        <Form.Item label="Client Name">
          <Input
            placeholder="Client Name"
            name="clientName"
            value={clientDetails?.clientName}
            onChange={onChange}
          />
        </Form.Item>
        <Space size={20}>
          <Form.Item label="Phone">
            <InputNumber
              addonBefore="+91"
              name="phone"
              maxLength={10}
              value={clientDetails?.phone}
              onChange={(val) => onChange('', 'phone', val)}
            />
          </Form.Item>

          <Form.Item label="Email">
            <Input
              name="email"
              value={clientDetails?.email}
              onChange={onChange}
            />
          </Form.Item>
        </Space>

        <Space size={20}>
          <Form.Item label="GSTIN/ Tax ID">
            <Input
              name="taxId"
              value={clientDetails?.taxId}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item label="PAN Number">
            <Input
              name="panNumber"
              value={clientDetails?.panNumber}
              onChange={onChange}
            />
          </Form.Item>
        </Space>

        <Form.Item label="Country">
          <Input
            style={{ width: '100%' }}
            name="country"
            value={clientDetails?.country}
            onChange={onChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ClientModal;
