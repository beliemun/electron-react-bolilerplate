import { Layout } from '@components/atoms';
import { Contents, Sider } from './components';

interface FoundationLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

export const FoundationLayout = ({
  title,
  children,
}: FoundationLayoutProps) => {
  console.log('FoundationLayout');
  return (
    <Layout>
      <Sider title={'Foundation'} />
      <Contents title={title}>{children}</Contents>
    </Layout>
  );
};
