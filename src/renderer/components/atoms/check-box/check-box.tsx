import {
  Checkbox as CheckboxAntd,
  CheckboxProps as CheckboxAntdProps,
} from 'antd';
import './styles.css';
import { CheckboxGroup } from './check-box-group';
import { cn } from '@common/utils';

export interface CheckboxProps extends CheckboxAntdProps {}

const Checkbox = ({ className, ...rest }: CheckboxProps) => {
  return (
    <CheckboxAntd
      style={{
        transform: 'scale(1.5)', // 전체 크기 확대
        margin: '5px', // 여백 조정
      }}
      className={cn(className)}
      {...rest}
    />
  );
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
