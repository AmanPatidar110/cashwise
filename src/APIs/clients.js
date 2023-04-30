export const getActiveClients = () => {
  //   return axios.get(`${API_URL}/clients`);
  return activeClientsList;
};

export const getDeletedClients = () => {
  //   return axios.get(`${API_URL}/clients`);
  return deletedClientsList;
};

export const postClient = async (client) => {
  //   return axios.get(`${API_URL}/clients`);
  // activeClientsList.push(client);
  return { ...client, key: activeClientsList.length };
};

export const putClient = async (client, clientId) => {
  //   return axios.get(`${API_URL}/clients`);
  // activeClientsList.push(client);
  return { ...client, key: clientId };
};

let activeClientsList = [
  {
    key: '1',
    clientName: 'John Brown',
    phone: '+9191773783827',
    email: 'john.brown@gmail.com',
    taxId: 'KA85506SDF',
    panNumber: '123456789',
    country: 'India',
  },
  {
    key: '2',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: 'ADC23456789',
    panNumber: 'A123456789',
    country: 'England',
  },
  {
    key: '3',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: '',
    panNumber: 'A123456789',
    country: 'USA',
  },
  {
    key: '4',
    clientName: 'Credits Technologies',
    phone: '+9191464533827',
    email: 'creds@gmail.com',
    taxId: 'FIXAS353453',
    panNumber: 'A123456789',
    country: 'Japan',
  },
  {
    key: '5',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: '',
    panNumber: 'A123456789',
    country: 'USA',
  },
  {
    key: '6',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: 'ANDAS353453',
    panNumber: 'A123456789',
    country: 'USA',
  },
  {
    key: '7',
    clientName: 'Credits Technologies',
    phone: '+9191464533827',
    email: 'creds@gmail.com',
    taxId: 'PEAS353453',
    panNumber: 'A123456789',
    country: 'Japan',
  },
  {
    key: '8',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: 'BADAS353453',
    panNumber: 'A123456789',
    country: 'USA',
  },
];

const deletedClientsList = [
  {
    key: '1',
    clientName: 'Brown',
    phone: '+9191773783827',
    email: 'brown@gmail.com',
    taxId: 'SJS3456789',
    panNumber: '1234KAP',
    country: 'India',
  },
  {
    key: '2',
    clientName: 'Astu Credits',
    phone: '+9191463783827',
    email: 'brown@gmail.com',
    taxId: 'ADCAD23456789',
    panNumber: 'A123456789',
    country: 'India',
  },
  {
    key: '3',
    clientName: 'More Technologies',
    phone: '+91943783827',
    email: 'more@gmail.com',
    taxId: '',
    panNumber: 'A123456789',
    country: 'USA',
  },
];
