import { Button, Radio, Text } from '@components/atoms';
import { Drawer, DrawerProps, Space } from '@components/organasims';
import { RadioChangeEvent } from 'antd/lib';
import { useState } from 'react';

export const BasicDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');

  const handleChange = (e: RadioChangeEvent) => setPlacement(e.target.value);
  const handleOpen = () => setOpen(true);
  const handleColse = () => setOpen(false);

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={handleChange}>
          <Radio value={'top'}>top</Radio>
          <Radio value={'right'}>right</Radio>
          <Radio value={'bottom'}>bottom</Radio>
          <Radio value={'left'}>left</Radio>
        </Radio.Group>
        <Button onClick={handleOpen} skipAnimation>
          Open Drawer
        </Button>
      </Space>
      <Drawer
        title="Drawer Title"
        placement={placement}
        width={500}
        onClose={handleColse}
        open={open}
      >
        <Space direction="vertical" gap={16}>
          <Text>Content 1</Text>
          <Text>Content 2</Text>
          <Text>Content 3</Text>
        </Space>
      </Drawer>
    </>
  );
};
