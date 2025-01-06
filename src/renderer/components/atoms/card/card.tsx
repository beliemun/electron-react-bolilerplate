import { cn } from '@common/utils';
import { Text } from '@components/atoms/text';
import { Card as CardAntd, CardProps as CardAntdProps } from 'antd';

export interface CardProps extends CardAntdProps {}

export const Card = ({ className, children, title, ...rest }: CardProps) => {
  return (
    <CardAntd
      className={cn(className)}
      title={<Text type="sm-bold">{title}</Text>}
      {...rest}
    >
      {children}
    </CardAntd>
  );
};
