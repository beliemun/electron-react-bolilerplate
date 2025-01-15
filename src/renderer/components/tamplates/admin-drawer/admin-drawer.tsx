import { Button, Input, Message, Select, Switch } from '@components/atoms';
import { FormItem } from '@components/molecules';
import { Drawer, Flex, Space } from '@components/organasims';
import { useAlertStore, useDarkModeStore, useUserStore } from '@stores';
import { useEffect, useState } from 'react';
import { useSafeNavigate } from '@hooks';
import { EquipmentType } from './types';
import { equipmentOptions, navigateOptions } from './data';

interface AdminDrawerProps {
  children: React.ReactNode;
}

const AdminDrawer = ({ children }: AdminDrawerProps) => {
  const navigate = useSafeNavigate();
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const user = useUserStore();
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState<string>(String(navigateOptions[0].value));
  const [messageApi, contextHolder] = Message.useMessage();
  const { show, onDismiss } = useAlertStore();

  const handleOpenDrawer = () => setOpen(true);
  const handleCloseDrawer = () => setOpen(false);
  const handleOpenFoundation = () => {
    navigate('/foundation');
    setOpen(false);
  };
  const handleChangeDarkMode = (value: boolean) => {
    setDarkMode(value);
    user.setUseDarkMode(value);
  };
  const handleChangeUseFaceRecongnition = (value: boolean) => {
    user.setUseFaceRecognition(value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    user.setPassword(e.target.value);
  };
  const handleChangeEquipment = (selectedEquipment: EquipmentType) => {
    show({
      title: '중장비 타입 변경',
      message: '타입을 변경하면 카메라 IP설정이 초기화됩니다. 계속 진행할까요?',
      actions: [
        {
          lable: '취소',
          style: 'ghost',
        },
        {
          lable: '변경',
          onClick: () => {
            user.setCameraIpList([]);
            user.setEquipmentType(selectedEquipment);
            onDismiss();
            messageApi.success(
              `중장비타입이 '${selectedEquipment.label}'값으로 변경되었습니다.`,
            );
          },
        },
      ],
    });
  };
  const handleNavigate = () => {
    navigate(path);
    setOpen(false);
  };
  const handleChangeIpList = (index: number, value: string) => {
    const ipList = [...user.cameraIpList];
    ipList[index] = value;
    user.setCameraIpList(ipList);
  };

  useEffect(() => {
    if (user.cameraIpList.length < 1) {
      const ipList = Array.from({ length: user.equipmentType.camera }).map(
        (_, index) => `192.168.0.${index + 1}`,
      );
      user.setCameraIpList(ipList);
    }
  }, [user.cameraIpList]);

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
            개발자 콘솔
          </Button>
        </div>
      ) : null}
      <Drawer
        title="개발자 콘솔"
        placement="right"
        width={500}
        open={open}
        onClose={handleCloseDrawer}
        zIndex={40}
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
          <FormItem label="컴포넌트" fullWidth={false}>
            <Button
              onClick={handleOpenFoundation}
              skipAnimation
              buttonSize="sm"
            >
              컴포넌트 관리
            </Button>
          </FormItem>
          <FormItem label="다크모드" fullWidth={false}>
            <Switch
              value={isDarkMode}
              checkedChildren={'ON'}
              unCheckedChildren={'OFF'}
              onChange={handleChangeDarkMode}
            />
          </FormItem>
          <FormItem label="안면인식" fullWidth={false}>
            <Switch
              value={user.useFaceRecognition}
              checkedChildren={'ON'}
              unCheckedChildren={'OFF'}
              onChange={handleChangeUseFaceRecongnition}
            />
          </FormItem>
          <FormItem label="관리자 비밀번호" fullWidth={false}>
            <Input.Password
              style={{ width: 200 }}
              value={user.password}
              onChange={handleChangePassword}
            />
          </FormItem>
          <FormItem label="중장비 타입">
            <Select
              style={{ width: 200 }}
              options={equipmentOptions}
              value={user.equipmentType}
              onChange={(value) => {
                const selectedEquipment = equipmentOptions.find(
                  (item) => item.value === value,
                );
                if (selectedEquipment) {
                  handleChangeEquipment(selectedEquipment);
                }
              }}
            />
          </FormItem>
          <FormItem label="카메라 IP 설정">
            {user.cameraIpList.map((ip, index) => (
              <Input
                style={{ width: 200 }}
                key={index}
                defaultValue={ip}
                onChange={(e) => handleChangeIpList(index, e.target.value)}
              />
            ))}
          </FormItem>
        </Space>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
