import { theme } from 'antd';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { cn } from '@common/utils';
import { ColorType } from '@styles/colors';
import { titleColorStyles } from './styles';
import { TitleColor, TitleStyle, TitleType } from './types';

export interface TitleProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  type?: TitleType;
  color?: TitleColor | ColorType;
  as?: keyof HTMLElementTagNameMap;
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

export const Title = ({
  children,
  style,
  className,
  type = 'h3-normal',
  color = 'default',
  as,
  ...rest
}: TitleProps) => {
  const [titleColor, setTitleColor] = useState<string>('default');
  const {
    token: { colorText, colorTextDescription, colorTextDisabled, colorBgBase },
  } = theme.useToken();
  const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  let Component: keyof JSX.IntrinsicElements = 'h1';
  if (headings.includes(String(type).slice(0, 2))) {
    Component = String(type).slice(0, 2) as keyof JSX.IntrinsicElements;
  }

  useEffect(() => {
    if (color === 'default') {
      setTitleColor(colorText);
    } else if (color === 'description') {
      setTitleColor(colorTextDescription);
    } else if (color === 'disabled') {
      setTitleColor(colorTextDisabled);
    } else if (color === 'invert') {
      setTitleColor(colorBgBase);
    }
  }, [color, colorText, colorTextDescription, colorTextDisabled, colorBgBase]);

  return (
    <Component
      style={{ ...style, color: titleColor }}
      className={cn(
        TitleStyle[type],
        isColorType(color) ? titleColorStyles({ color }) : null,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
