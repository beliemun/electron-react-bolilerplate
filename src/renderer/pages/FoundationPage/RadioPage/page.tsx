import { Card, Radio, Section, Space, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const RadioPage = () => {
  return (
    <PageLayout title="<Radio />">
      <Section>
        <Card title={'Variants'}>
          <Space direction="horizontal">
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
            options={[
              {
                label: <Text type="sm-normal">Value 1</Text>,
                value: 1,
              },
              {
                label: <Text type="sm-normal">Value 2</Text>,
                value: 2,
              },
              {
                label: <Text type="sm-normal">Value 3</Text>,
                value: 3,
              },
            ]}
            defaultValue={1}
          />
        </Card>
      </Section>
    </PageLayout>
  );
};

export default RadioPage;
