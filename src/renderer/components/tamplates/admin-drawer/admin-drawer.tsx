import { Button, Input, Message, Select, Switch } from '@components/atoms';
import { FormItem } from '@components/molecules';
import { Drawer, Flex, Space } from '@components/organasims';
import { useDarkModeStore } from '@stores';
import { useState } from 'react';

import { useSafeNavigate } from '@hooks';
import {
  equipmentOptions,
  EquipmentType,
  navigateOptions,
} from '@components/tamplates/admin-drawer/data';

interface AdminDrawerProps {
  children: React.ReactNode;
}

const AdminDrawer = ({ children }: AdminDrawerProps) => {
  const navigate = useSafeNavigate();
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState<string>(String(navigateOptions[0].value));
  const [equipment, setEquipment] = useState<EquipmentType>(
    equipmentOptions[1],
  );
  const [messageApi, contextHolder] = Message.useMessage();

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
  const handleSaveCameraConfig = () => {
    messageApi.success('설정이 저장되었습니다.');
  };

  return (
    <>
      {contextHolder}
      {children}
      {process.env.NODE_ENV === 'development' ? (
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
      ) : null}
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
                style={{ width: 200 }}
                options={navigateOptions}
                defaultValue={navigateOptions[0]}
                value={path}
                onChange={setPath}
              />
              <Button onClick={handleNavigate} buttonSize="sm" skipAnimation>
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
          <FormItem label="중장비 타입">
            <Flex gap={20}>
              <Select
                style={{ width: 200 }}
                options={equipmentOptions}
                defaultValue={equipmentOptions[0].value}
                value={equipment.value}
                onChange={(value) => {
                  const selectedEquipment = equipmentOptions.find(
                    (item) => item.value === value,
                  );
                  if (selectedEquipment) setEquipment(selectedEquipment);
                }}
              />
              <Button
                onClick={handleSaveCameraConfig}
                buttonSize="sm"
                skipAnimation
              >
                저장
              </Button>
            </Flex>
          </FormItem>
          <FormItem label="카메라 IP 설정">
            {Array.from({ length: equipment.camera }).map((_, index) => (
              <Input
                style={{ width: 200 }}
                key={index}
                defaultValue={`192.168.0.${index + 1}`}
              />
            ))}
          </FormItem>
        </Space>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
