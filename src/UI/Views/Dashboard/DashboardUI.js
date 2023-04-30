// @flow
import { Layout } from 'antd';
import * as React from 'react';
import { AppHeader } from '../../Reusable/AppHeader';
import { AppContent } from '../../Reusable/AppContent';
import { AppSidebar } from '../../Reusable/AppSidebar';
import { ClientsList } from '../../Containers/Dashboard/ClientsList/ClientsList';

export const DashboardUI = () => {
  return (
    <Layout>
      <AppSidebar />
      <Layout>
        <AppHeader headerTitle={'Clients List'} />
        <ClientsList />
      </Layout>
    </Layout>
  );
};
