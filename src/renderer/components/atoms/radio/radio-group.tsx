import { cn } from '@common/utils';
import { Radio, RadioGroupProps as RadioGroupAntdProps } from 'antd';

interface RadioGroupProps extends RadioGroupAntdProps {}

export const RadioGroup = ({ className, ...rest }: RadioGroupProps) => {
  return <Radio.Group className={cn(className)} {...rest}></Radio.Group>;
};
