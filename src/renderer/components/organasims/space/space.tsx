import { cn } from '@common/utils';
import { Space as SpaceAntd, SpaceProps as SpaceAntdProps } from 'antd';

export interface SpaceProps extends SpaceAntdProps {
  gap?: number;
}

export const Space = ({
  style,
  className,
  children,
  gap,
  ...rest
}: SpaceProps) => {
  return (
    <SpaceAntd style={{ gap, ...style }} className={cn(className)} {...rest}>
      {children}
    </SpaceAntd>
  );
};
