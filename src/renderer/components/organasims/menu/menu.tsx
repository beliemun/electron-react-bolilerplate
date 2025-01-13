import { Menu as MenuAntd, MenuProps as MenuAntdProps } from 'antd';
import { cn } from '@common/utils';
import './styles.css';

interface MenuProps extends MenuAntdProps {}

export const Menu = ({ className, ...rest }: MenuProps) => {
  return <MenuAntd className={cn(className)} {...rest} />;
};
