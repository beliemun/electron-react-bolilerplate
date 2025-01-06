import { ButtonStyleType } from '@components/atoms/button/types';
import { ColorType } from '@styles/colors';
import { ReactNode } from 'react';

export type AlertSize = 640 | 720 | 1024;
export type AlertFooterDirection = 'left' | 'right';

export interface AlertAction {
  lable: string;
  style?: ButtonStyleType;
  color?: ColorType;
  onClick?: () => void | undefined;
  onClickAsync?: () => Promise<void> | undefined;
}

export interface AlertProps {
  visible: boolean;
  size?: AlertSize | undefined;
  title?: string | undefined;
  message?: string | undefined;
  contents?: ReactNode | undefined;
  actions?: AlertAction[] | undefined;
  footerDirection?: AlertFooterDirection | undefined;
  footerFitable?: boolean | undefined;
  loading?: boolean | undefined;
}

export interface AlertStore extends AlertProps {
  show: (props: Omit<AlertProps, 'visible'>) => void;
  onDismiss: () => void;
}
