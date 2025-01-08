import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Card, Section, Space, Switch } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const SwitchPage = () => {
  return (
    <PageLayout title="<Switch />">
      <Section>
        <Card>
          <Space gap={16}>
            <Switch size="default" />
            <Switch
              size="default"
              defaultChecked
              checkedChildren={'On'}
              unCheckedChildren={'Off'}
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default SwitchPage;
