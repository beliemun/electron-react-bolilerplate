import {
  Card,
  Checkbox,
  CheckboxProps,
  Section,
  Space,
  Text,
} from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { useState } from 'react';

const options = ['Option A', 'Option B', 'Option C', 'Option D'];

const CheckboxPage = () => {
  const [checkedList, setCheckedList] = useState<string[]>([
    'Option A',
    'Option C',
  ]);
  const checkAll = checkedList.length === options.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < options.length;
  const onChange = (e: string[]) => setCheckedList(e);
  const onChangeAll: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? options : []);
  };

  return (
    <PageLayout title="<Checkbox />">
      <Section>
        <Card title={'Variants'}>
          <Space direction="vertical" gap={16}>
            <Space direction="horizontal">
              <Checkbox />
              <Text type="sm-normal">Base</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox indeterminate />
              <Text type="sm-normal">Indeterminate</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox checked />
              <Text type="sm-normal">Default checkd</Text>
            </Space>
          </Space>
        </Card>
        <Card title={'Disabled'}>
          <Space direction="vertical" gap={16}>
            <Space direction="horizontal">
              <Checkbox disabled />
              <Text type="sm-normal">Base</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox indeterminate disabled />
              <Text type="sm-normal">Indeterminate</Text>
            </Space>
            <Space direction="horizontal">
              <Checkbox checked disabled />
              <Text type="sm-normal">Default checkd</Text>
            </Space>
          </Space>
        </Card>
        <Card
          title={'Group'}
          actions={[
            <Checkbox
              indeterminate={indeterminate}
              checked={checkAll}
              onChange={onChangeAll}
              key={1}
            >
              <Text type="base-semibold">
                {checkAll ? 'Uncheck all' : 'Check all'}
              </Text>
            </Checkbox>,
          ]}
        >
          <Space direction="horizontal" size={16} className="py-2">
            <Checkbox.Group
              options={options}
              value={checkedList}
              onChange={onChange}
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default CheckboxPage;
