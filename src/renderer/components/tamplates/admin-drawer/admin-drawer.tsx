import { Button, Select, Switch } from '@components/atoms';
import { FormItem } from '@components/molecules';
import { Drawer, Flex, Space } from '@components/organasims';
import { useDarkModeStore } from '@stores';
import { useState } from 'react';

import { useSafeNavigate } from '@hooks';
import { navigateOptions } from '@components/tamplates/admin-drawer/data';

interface AdminDrawerProps {
  children: React.ReactNode;
}

const AdminDrawer = ({ children }: AdminDrawerProps) => {
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const navigate = useSafeNavigate();

  const [open, setOpen] = useState(false);
  const [path, setPath] = useState<string>(String(navigateOptions[0].value));

  const handleOpenDrawer = () => setOpen(true);
  const handleCloseDrawer = () => setOpen(false);
  const handleOpenFoundation = () => {
    navigate('/foundation');
    setOpen(false);
  };
  const handleChangeDarkMode = (value: boolean) => setDarkMode(value);
  const handleNavigate = () => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {children}
      <div className="fixed bottom-8 right-8">
        <Button
          onClick={handleOpenDrawer}
          skipAnimation
          buttonColor={'red'}
          buttonStyle="soft"
          buttonSize="sm"
        >
          관리자 콘솔
        </Button>
      </div>
      <Drawer
        title="관리자 콘솔"
        placement="right"
        width={500}
        open={open}
        onClose={handleCloseDrawer}
      >
        <Space direction="vertical">
          <FormItem label="화면이동">
            <Flex gap={20}>
              <Select
                options={navigateOptions}
                defaultValue={navigateOptions[0]}
                onChange={setPath}
                value={path}
              />
              <Button onClick={handleNavigate} buttonSize="sm">
                이동
              </Button>
            </Flex>
          </FormItem>
          <FormItem label="컴포넌트">
            <Button
              onClick={handleOpenFoundation}
              skipAnimation
              buttonSize="sm"
            >
              컴포넌트 관리
            </Button>
          </FormItem>
          <FormItem label="다크모드">
            <Switch
              className="inline-block"
              value={isDarkMode}
              checkedChildren={'ON'}
              unCheckedChildren={'OFF'}
              onChange={handleChangeDarkMode}
            />
          </FormItem>
        </Space>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
