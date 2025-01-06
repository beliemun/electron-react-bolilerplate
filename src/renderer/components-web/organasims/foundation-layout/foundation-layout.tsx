import { Layout } from '@components/atoms';
import { Sider } from './components';
import { Outlet } from 'react-router-dom';

export const FoundationLayout = () => {
  return (
    <Layout>
      <Sider title={'Foundation'} />
      <Outlet />
    </Layout>
  );
};
