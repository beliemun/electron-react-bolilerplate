import './styles.css';
import { useDarkModeStore } from '@stores';
import {
  ColorPicker as ColorPickerAntd,
  ColorPickerProps as ColorPickerAtndProps,
} from 'antd';
import { cn } from '@common/utils';

export interface ColorPickerProps extends ColorPickerAtndProps {}

export const ColorPicker = ({
  className,
  size = 'middle',
  ...rest
}: ColorPickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ColorPickerAntd
      className={cn(isDarkMode && 'dark', className)}
      size={size}
      {...rest}
    />
  );
};
