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
          wireframe: false,
          fontSize: 18, // 기본값 14
          sizeStep: 6, // 기본값 6
          sizeUnit: 4, // 기본값 4
          colorPrimary: colors.violet[500],
          colorInfo: colors.violet[500],
          margin: 24,
        },
        components: {
          Switch: {
            fontSize: 24,
            handleSize: 26,
            trackPadding: 4,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
