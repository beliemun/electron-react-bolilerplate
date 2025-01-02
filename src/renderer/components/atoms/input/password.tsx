import { InputRef, PasswordProps as PasswordAntdProps } from 'antd/es/input';
import { ForwardedRef, forwardRef } from 'react';
import { ConfigProvider } from './config-provider';
import PasswordAntd from 'antd/es/input/Password';
import { Text } from '../text';
import './styles.css';
import { cn } from '@common/utils';

export interface PasswordProps extends PasswordAntdProps {
  errors?: string[] | undefined;
}

const Password = (
  { className, size = 'middle', errors, ...rest }: PasswordProps,
  ref: ForwardedRef<InputRef>,
) => {
  return (
    <ConfigProvider>
      <PasswordAntd
        ref={ref}
        className={cn(size, className)}
        size={size}
        {...rest}
      />
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

export default forwardRef<InputRef, PasswordProps>(Password);
