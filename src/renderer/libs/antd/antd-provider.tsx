import { colors } from '@styles/colors';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

const AntdProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 6,
          wireframe: false,
          fontSize: 14,
          colorPrimary: colors.teal[500],
          colorInfo: colors.teal[500],
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
