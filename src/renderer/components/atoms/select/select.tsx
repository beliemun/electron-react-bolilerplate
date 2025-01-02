import { Select as SelectAntd, SelectProps as SelectAntdProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { ConfigProvider } from './config-provider';
import './styles.css';
import { cn } from '@common/utils';

export interface SelectProps extends SelectAntdProps {}

export type SelectOption = DefaultOptionType;

export const Select = ({
  style,
  className,
  children,
  size = 'middle',
  ...rest
}: SelectProps) => {
  return (
    <ConfigProvider>
      <SelectAntd
        style={{ borderRadius: 8, ...style }}
        className={cn(size, className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};
