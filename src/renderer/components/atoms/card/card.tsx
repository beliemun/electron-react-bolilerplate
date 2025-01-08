import './styles.css';
import { cn } from '@common/utils';
import { Text } from '@components/atoms/text';
import { Card as CardAntd, CardProps as CardAntdProps } from 'antd';

export interface CardProps extends CardAntdProps {}

export const Card = ({ className, children, title, ...rest }: CardProps) => {
  return (
    <CardAntd
      className={cn(className)}
      title={
        title ? (
          <Text type="sm-light" color="description">
            {title}
          </Text>
        ) : undefined
      }
      {...rest}
    >
      {children}
    </CardAntd>
  );
};
