import {
  Checkbox as CheckboxAntd,
  CheckboxProps as CheckboxAntdProps,
} from 'antd';
import './styles.css';
import { CheckboxGroup } from './check-box-group';
import { cn } from '@common/utils';

export interface CheckboxProps extends CheckboxAntdProps {}

const Checkbox = ({ className, ...rest }: CheckboxProps) => {
  return <CheckboxAntd className={cn(className)} {...rest} />;
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
