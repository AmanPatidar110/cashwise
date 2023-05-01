import { ConfigProvider } from 'antd';
import './App.css';
import { Dashboard } from './UI/Containers/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          '@font-size-base': '16px',
          token: {
            // colorPrimary: '#1161D6',
            // colorBgBase: '#032d69',
          },
        }}
      >
        <Dashboard />
      </ConfigProvider>
    </div>
  );
}

export default App;
