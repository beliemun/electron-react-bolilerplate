import { hexToRGBA } from '@common/utils';
import { useDarkModeStore } from '@stores';
import { colors } from '@styles/colors';
import { ConfigProvider as ConfigProviderAntd } from 'antd';
import { ReactNode } from 'react';

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProviderAntd
      theme={{
        components: {
          Input: {
            // small
            inputFontSizeSM: 16,
            borderRadiusSM: 8,
            paddingInlineSM: 12,
            paddingBlockSM: 7,

            // medium
            inputFontSize: 20,
            borderRadius: 8,
            paddingInline: 13,
            paddingBlock: 8,

            // large
            inputFontSizeLG: 24,
            borderRadiusLG: 8,
            paddingInlineLG: 14,
            paddingBlockLG: 12,

            // color
            hoverBorderColor: colors.primary[500],
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
