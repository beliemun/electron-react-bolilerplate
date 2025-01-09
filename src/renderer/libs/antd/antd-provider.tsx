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
          fontSize: 18,
          sizeStep: 6,
          sizeUnit: 4,
          colorPrimary: colors.violet[500],
          colorInfo: colors.violet[500],
        },
        components: {
          Checkbox: {
            fontSize: 26,
            controlInteractiveSize: 30,
            borderRadiusSM: 8,
          },
          Input: {},
          Image: {
            previewOperationSize: 48,
          },
          Message: {
            fontSize: 26,
            fontSizeLG: 34,
            lineHeight: 2,
            contentPadding: '12px 24px',
            borderRadiusLG: 100,
          },
          Radio: {
            radioSize: 30,
            dotSize: 12,
          },
          Switch: {
            fontSize: 26,
            // for small size
            fontSizeSM: 18,
            innerMinMarginSM: 12,
            innerMaxMarginSM: 28,
            trackHeightSM: 24,
            handleSizeSM: 20,
          },
          Transfer: {
            headerHeight: 60,
            itemHeight: 40,
            paddingSM: 12,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
