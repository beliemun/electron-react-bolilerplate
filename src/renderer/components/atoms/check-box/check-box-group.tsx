import './styles.css';
import { Checkbox } from 'antd';
import { CheckboxGroupProps as CheckboxGroupAntdProps } from 'antd/lib/checkbox';
import { cn } from '@common/utils';

export interface CheckboxGroupProps extends CheckboxGroupAntdProps {}

export const CheckboxGroup = ({ className, ...rest }: CheckboxGroupProps) => {
  return <Checkbox.Group className={cn(className)} {...rest} />;
};
