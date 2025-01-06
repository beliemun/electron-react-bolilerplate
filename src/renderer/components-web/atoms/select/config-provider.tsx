import { ReactNode } from 'react';
import { ConfigProvider as ConfigProviderAntd } from 'antd';

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProviderAntd
      theme={{
        components: {
          Select: {
            borderRadiusSM: 8,
            borderRadius: 8,
            borderRadiusLG: 8,
            multipleItemHeight: 30,
            optionPadding: 8,
            controlHeightSM: 32,
            controlHeight: 40,
            controlHeightLG: 48,
          },
        },
      }}
    >
      {children}
    </ConfigProviderAntd>
  );
};
