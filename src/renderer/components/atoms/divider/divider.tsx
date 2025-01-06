import { capitalizeFirstLetter, cn } from '@common/utils';
import { Text } from '@components/atoms/text';
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
      <Text type={'sm-bold'}>
        {children ? capitalizeFirstLetter(String(children)) : null}
      </Text>
    </DividerAtnd>
  );
};
