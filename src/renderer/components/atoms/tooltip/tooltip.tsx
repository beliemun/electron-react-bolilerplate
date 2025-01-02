import { cn } from '@common/utils';
import { Tooltip as TooltipAtnd, TooltipProps as TooltipAntdProps } from 'antd';

export type TooltipProps = TooltipAntdProps;

export const Tooltip = ({ className, ...rest }: TooltipProps) => {
  return <TooltipAtnd className={cn(className)} {...rest}></TooltipAtnd>;
};
