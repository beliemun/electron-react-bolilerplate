import { Text } from '@components/atoms';
import { Layout, theme } from 'antd';

interface ContentsLayoutProps {
  title?: React.ReactNode | string;
  children?: React.ReactNode | undefined;
}

export const PageLayout = ({ title, children }: ContentsLayoutProps) => {
  const {
    token: { colorText, colorBorder, colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{ backgroundColor: colorBgContainer }}
      className={'flex flex-col overflow-hidden ml-64'}
    >
      <Text
        style={{ color: colorText }}
        className="flex flex-row justify-start items-center h-20 p-8"
        type={'default-normal'}
        color="description"
      >
        {title}
      </Text>
      <Layout
        style={{
          display: 'block',
          color: colorText,
          backgroundColor: colorBgContainer,
          minHeight: `calc(100vh - ${80}px)`,
          borderTopWidth: '1px',
          borderColor: colorBorder,
          overflow: 'hidden',
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
};
