import { useDarkModeStore } from '@stores';
import { colors } from '@styles/colors';
import { ConfigProvider, theme } from 'antd';
import { ReactNode } from 'react';

const AntdProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : undefined,
        token: {
          borderRadius: 6,
          wireframe: false,
          fontSize: 14,
          colorPrimary: colors.violet[500],
          colorInfo: colors.violet[500],
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
