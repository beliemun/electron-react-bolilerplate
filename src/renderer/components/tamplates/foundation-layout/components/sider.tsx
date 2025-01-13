import { useState } from 'react';
import { theme } from 'antd';
import { menuItems } from '../data';
import { Divider } from '@components/atoms';
import { Layout, Menu } from '@components/organasims';
import type { MenuProps } from 'antd';
import { useDarkModeStore } from '@stores';
import { Footer } from './footer';
import { useSafeNavigate } from '@hooks';

interface SiderProps {
  title?: string;
}

export const Sider = ({ title }: SiderProps) => {
  const navigate = useSafeNavigate();

  // 상태 타입 지정
  const [selectedKey, setSelectedKey] = useState<string>('color-pallet');
  const {
    token: { colorBorder, colorTextDescription, fontSize },
  } = theme.useToken();

  const handleClickMenu: MenuProps['onClick'] = ({ key }) => {
    setSelectedKey(key);
    navigate(`/foundation/${key}`);
  };

  const { isDarkMode, setDarkMode } = useDarkModeStore();

  return (
    <Layout.Sider
      theme="light"
      width={256}
      style={{
        overflow: 'auto',
        height: `calc(100vh - 60px)`,
        position: 'fixed',
        borderRight: `1px solid ${colorBorder}`,
        paddingBottom: 60,
      }}
      trigger={null}
    >
      <Divider
        style={{ color: colorTextDescription, fontSize }}
        orientation="left"
      >
        {title}
      </Divider>
      <Menu
        theme="light"
        mode="inline"
        items={menuItems}
        selectedKeys={[selectedKey]}
        onClick={handleClickMenu}
        style={{ border: 'none' }}
      />
      <Footer />
    </Layout.Sider>
  );
};
