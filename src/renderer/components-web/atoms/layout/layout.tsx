import { cn } from '@common/utils';
import { Layout as LayoutAntd, LayoutProps as LayoutAntdProps } from 'antd';

interface LayoutProps extends LayoutAntdProps {}

const Layout = ({ className, children, ...rest }: LayoutProps) => {
  return (
    <LayoutAntd className={cn(className)} {...rest}>
      {children}
    </LayoutAntd>
  );
};

Layout.Sider = LayoutAntd.Sider;

export { Layout };
