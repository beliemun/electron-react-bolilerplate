import { Button, Text } from '@components/atoms';
import { Drawer, Space } from '@components/organasims';
import { theme } from 'antd';
import { useState } from 'react';

export const InnerDrawer = () => {
  const {
    token: { colorFillAlter, colorBorderSecondary, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: 1080,
        width: '100%',
        height: 320,
        padding: 16,
        overflow: 'hidden',
        background: colorFillAlter,
        border: `1px solid ${colorBorderSecondary}`,
        borderRadius: borderRadiusLG,
      }}
    >
      <Button onClick={handleOpen} skipAnimation>
        Open Drawer
      </Button>

      <Drawer
        title={'Inner Drawer'}
        placement="right"
        onClose={handleClose}
        open={open}
        closable={false}
        getContainer={false}
      >
        <Space direction="vertical" gap={16}>
          <Text>Content 1</Text>
          <Text>Content 2</Text>
          <Text>Content 3</Text>
        </Space>
      </Drawer>
    </div>
  );
};
