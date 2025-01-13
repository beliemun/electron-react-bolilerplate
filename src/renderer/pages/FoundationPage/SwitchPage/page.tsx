import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Card, Switch } from '@components/atoms';
import { Section, Space } from '@components/organasims';
import { PageLayout } from '@components/tamplates';

const SwitchPage = () => {
  return (
    <PageLayout title="<Switch />">
      <Section>
        <Card title={'Size'}>
          <Space direction="vertical" gap={16}>
            <Switch size="small" defaultChecked />
            <Switch size="default" />
          </Space>
        </Card>
        <Card title={'with Text, Icon'}>
          <Space direction="vertical" gap={16}>
            <Switch
              size="small"
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
            <Switch
              size="default"
              defaultChecked
              checkedChildren={'On'}
              unCheckedChildren={'Off'}
            />
          </Space>
        </Card>
        <Card title={'Loading'}>
          <Space direction="vertical" gap={16}>
            <Switch
              size="small"
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              loading
            />
            <Switch
              size="default"
              defaultChecked
              checkedChildren={'On'}
              unCheckedChildren={'Off'}
              loading
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default SwitchPage;
