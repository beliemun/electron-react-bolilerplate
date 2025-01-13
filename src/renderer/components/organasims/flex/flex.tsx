import { cn } from '@common/utils';
import { Flex as FlexAntd, FlexProps as FlexPropsAntd } from 'antd';

export interface FlexAntd extends FlexPropsAntd {}

export const Flex = ({ style, className, children, ...rest }: FlexAntd) => {
  return (
    <FlexAntd style={{ ...style }} className={cn(className)} {...rest}>
      {children}
    </FlexAntd>
  );
};
