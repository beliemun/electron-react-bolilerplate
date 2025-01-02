import { cn } from '@common/utils';
import { Card as CardAntd, CardProps as CardAntdProps } from 'antd';

export interface CardProps extends CardAntdProps {}

export const Card = ({ className, children, ...rest }: CardProps) => {
  return (
    <CardAntd className={cn(className)} {...rest}>
      {children}
    </CardAntd>
  );
};
