import {
  Checkbox as CheckboxAntd,
  CheckboxProps as CheckboxAntdProps,
  CheckboxOptionType as CheckboxAntdOptionType,
} from 'antd';
import './styles.css';
import { CheckboxGroup } from './check-box-group';
import { cn } from '@common/utils';

export interface CheckboxProps extends CheckboxAntdProps {}
export interface CheckboxOptionType extends CheckboxAntdOptionType {}

const Checkbox = ({ className, ...rest }: CheckboxProps) => {
  return <CheckboxAntd className={cn(className)} {...rest} />;
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
