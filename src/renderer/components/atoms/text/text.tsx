import { theme } from 'antd';
import {
  CSSProperties,
  forwardRef,
  LegacyRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { cn } from '@common/utils';
import { ColorType } from '@styles/colors';
import { TextColor, TextStyle, TextType } from './types';
import { textColorStyles } from './styles';

export interface TextProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TextType;
  color?: TextColor | ColorType;
  onClick?: () => void;
}

const isColorType = (color: string): color is ColorType => {
  const colorTypes: ColorType[] = [
    'primary',
    'slate',
    'gray',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'blue',
    'violet',
    'purple',
    'pink',
    'rose',
  ];
  return colorTypes.includes(color as ColorType);
};

const Text = (
  {
    children,
    style,
    className,
    type = 'default-normal',
    color = 'default',
    ...rest
  }: TextProps,
  ref: LegacyRef<HTMLSpanElement>,
) => {
  const [textColor, setTextColor] = useState<string>('default');
  const {
    token: { colorText, colorTextDescription, colorTextDisabled, colorBgBase },
  } = theme.useToken();

  useEffect(() => {
    if (color === 'default') {
      setTextColor(colorText);
    } else if (color === 'white') {
      setTextColor('#fff');
    } else if (color === 'black') {
      setTextColor('#000');
    } else if (color === 'description') {
      setTextColor(colorTextDescription);
    } else if (color === 'disabled') {
      setTextColor(colorTextDisabled);
    } else if (color === 'invert') {
      setTextColor(colorBgBase);
    }
  }, [color, colorText, colorTextDescription, colorTextDisabled, colorBgBase]);
  return (
    <span
      ref={ref}
      style={{ color: textColor, ...style }}
      className={cn(
        TextStyle[type],
        isColorType(color) ? textColorStyles({ color }) : null,
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default forwardRef(Text);
