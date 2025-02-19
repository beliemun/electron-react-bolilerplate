import { ReactNode } from 'react';
import { ConfigProvider as ConfigProviderAntd } from 'antd';
import { useDarkModeStore } from '@stores';
import { hexToRGBA } from '@common/utils';
import { colors } from '@styles/colors';

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProviderAntd
      theme={{
        components: {
          Input: {
            // small
            inputFontSizeSM: 14,
            borderRadiusSM: 8,
            paddingInlineSM: 12,
            paddingBlockSM: 6,

            // medium
            inputFontSize: 14,
            borderRadius: 8,
            paddingInline: 14,
            paddingBlock: 10,

            // large
            inputFontSizeLG: 16,
            borderRadiusLG: 8,
            paddingInlineLG: 14,
            paddingBlockLG: 12,

            activeShadow: isDarkMode
              ? `0 0 0 4px ${hexToRGBA({ hex: colors.primary[100], alpha: 0.3 })}`
              : `0 0 0 4px ${hexToRGBA({ hex: colors.primary[500], alpha: 0.3 })}`,
            warningActiveShadow: isDarkMode
              ? `0 0 0 4px ${hexToRGBA({ hex: colors.yellow[100], alpha: 0.3 })}`
              : `0 0 0 4px ${hexToRGBA({ hex: colors.yellow[500], alpha: 0.3 })}`,
            errorActiveShadow: isDarkMode
              ? `0 0 0 4px ${hexToRGBA({ hex: colors.red[100], alpha: 0.3 })}`
              : `0 0 0 4px ${hexToRGBA({ hex: colors.red[500], alpha: 0.3 })}`,
          },
        },
      }}
    >
      {children}
    </ConfigProviderAntd>
  );
};
