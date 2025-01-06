import { capitalizeFirstLetter, cn } from '@common/utils';
import { Divider as DividerAtnd, DividerProps as DividerAntdProps } from 'antd';

export interface DividerProps extends DividerAntdProps {}

export const Divider = ({
  style,
  className,
  children,
  ...rest
}: DividerProps) => {
  return (
    <DividerAtnd style={{ ...style }} className={cn(className)} {...rest}>
      {children ? capitalizeFirstLetter(String(children)) : null}
    </DividerAtnd>
  );
};
