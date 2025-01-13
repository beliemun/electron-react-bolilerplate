import { Switch as SwitchAntd, SwitchProps as SwitchAntdProps } from 'antd';
import { cn } from '@common/utils';
import { title } from 'process';

export interface SwitchProps extends SwitchAntdProps {}

export const Switch = ({ className, ...rest }: SwitchProps) => {
  return <SwitchAntd className={cn(className)} {...rest} />;
};
