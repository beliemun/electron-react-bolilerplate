import {
  CheckboxOptionType,
  Radio as RadioAntd,
  RadioProps as RadioAntdProps,
} from 'antd';
import { RadioGroup } from './radio-group';
import { cn } from '@common/utils';

export interface RadioProps extends RadioAntdProps {
  className?: string;
}

export type RadioOption = string | number | CheckboxOptionType<any>;

const Radio = ({ className, ...rest }: RadioProps) => {
  return <RadioAntd className={cn(className)} {...rest} />;
};

Radio.Group = RadioGroup;

export default Radio;
