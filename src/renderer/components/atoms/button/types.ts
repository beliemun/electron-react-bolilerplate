import { ColorType } from '@styles/colors';
import { TooltipPlacement } from 'antd/es/tooltip';
import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type ButtonRoundType = 'round' | 'pill';
export type ButtonStyleType = 'solid' | 'outline' | 'ghost' | 'soft';
export const buttonTypes: ButtonStyleType[] = [
  'solid',
  'outline',
  'ghost',
  'soft',
];

export type ButtonSizeType = 'sm' | 'default' | 'lg';
export type ButtonFullWidthType = 'default' | 'full';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  buttonRound?: ButtonRoundType;
  buttonStyle?: ButtonStyleType;
  buttonSize?: ButtonSizeType;
  buttonColor?: ColorType;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  tooltipTitle?: string;
  tooltipStyle?: CSSProperties;
  tooltipPlacement?: TooltipPlacement;
  showCloseButton?: boolean;
  skipAnimation?: boolean;
  onClick?: () => void;
}
