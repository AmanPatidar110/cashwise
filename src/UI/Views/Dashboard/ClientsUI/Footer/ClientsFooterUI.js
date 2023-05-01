import * as React from 'react';

export const ClientsFooterUI = ({ handleAddClient }) => {
  return (
    <div className="clients_footer">
      <button className="clients_footer_action outlined">Upload Clients</button>
      <button
        className="clients_footer_action contained"
        onClick={handleAddClient}
      >
        Add Client
      </button>
    </div>
  );
};
