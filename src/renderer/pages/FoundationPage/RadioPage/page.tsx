import { Card, Radio, Section, Space, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { radioOptions } from './data';

const RadioPage = () => {
  return (
    <PageLayout title="<Radio />">
      <Section>
        <Card title={'Variants'}>
          <Space direction="horizontal" gap={16}>
            <Radio value={1}>
              <Text type="sm-normal">Default</Text>
            </Radio>
            <Radio value={2} checked>
              <Text type="sm-normal">Checked</Text>
            </Radio>
            <Radio value={3} disabled>
              <Text type="sm-normal">Disabled</Text>
            </Radio>
          </Space>
        </Card>
        <Card title={'Radio Group'}>
          <Radio.Group
            className="whitespace-nowrap"
            options={radioOptions}
            defaultValue={radioOptions[0]}
          />
        </Card>
      </Section>
    </PageLayout>
  );
};

export default RadioPage;
