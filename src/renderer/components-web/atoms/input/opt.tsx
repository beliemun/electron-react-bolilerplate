import OTPAntd, { OTPProps as OTPAntdProps, OTPRef } from 'antd/es/input/OTP';
import { ForwardedRef, forwardRef } from 'react';
import { ConfigProvider } from './config-provider';
import { Text } from '../text';
import { cn } from '@common/utils';

export interface OTPProps extends OTPAntdProps {
  errors?: string[] | undefined;
}

const OTP = (
  { className, errors, ...rest }: OTPProps,
  ref: ForwardedRef<OTPRef>,
) => {
  return (
    <ConfigProvider>
      <OTPAntd ref={ref} className={cn(className)} {...rest} />
      <div className="flex flex-col space-y-1 mt-1 ml-1">
        {errors?.map((error, index) => (
          <Text type="sm-regular" color="red" key={index}>
            {'• ' + error}
          </Text>
        ))}
      </div>
    </ConfigProvider>
  );
};

export default forwardRef<OTPRef, OTPProps>(OTP);
