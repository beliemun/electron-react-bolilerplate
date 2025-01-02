import { useEffect, useState } from 'react';
import { theme } from 'antd';
import { menuItems } from '../data';
import { Divider, Layout, Menu } from '@components/atoms';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';

interface SiderProps {
  title?: string;
}

export const Sider: React.FC<SiderProps> = ({ title }) => {
  const navigate = useNavigate();

  // 상태 타입 지정
  const [selectedKey, setSelectedKey] = useState<string>('color-pallet');
  const {
    token: { colorBorder, colorTextDescription, fontSize },
  } = theme.useToken();

  const handleClickMenu: MenuProps['onClick'] = ({ key }) => {
    console.log('key:', key);
    setSelectedKey(key);
    navigate(`/foundation/${key}`);
  };

  useEffect(() => {
    console.log('selectedKey:', selectedKey);
  }, [selectedKey]);

  return (
    <Layout.Sider
      className="hide-scrollba"
      theme="light"
      collapsible
      width={256}
      style={{
        overflow: 'auto',
        height: `calc(100vh)`,
        position: 'fixed',
        borderRight: `1px solid ${colorBorder}`,
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
    </Layout.Sider>
  );
};
