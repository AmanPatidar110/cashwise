// @flow
import { Button } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import * as React from 'react';

export const ClientsFooterUI = ({ handleAddClient }) => {
  return (
    <div className="clients_footer">
      <Button className="clients_footer_action">Upload Client</Button>
      <Button type="primary" onClick={handleAddClient}>
        Add Client
      </Button>
    </div>
  );
};
