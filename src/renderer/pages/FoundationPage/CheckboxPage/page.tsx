import {
  Card,
  Checkbox,
  CheckboxOptionType,
  CheckboxProps,
  Text,
} from '@components/atoms';
import { Section, Space } from '@components/organasims';
import { PageLayout } from '@components/tamplates';
import { useState } from 'react';

const options: CheckboxOptionType[] = [
  {
    label: <Text type="sm-normal">Option 1</Text>,
    value: 'Option 1',
  },
  {
    label: <Text type="sm-normal">Option 2</Text>,
    value: 'Option 2',
  },
  {
    label: <Text type="sm-normal">Option 3</Text>,
    value: 'Option 3',
  },
];

const CheckboxPage = () => {
  return <></>;
  const [checkedList, setCheckedList] = useState<string[]>([
    'Option A',
    'Option C',
  ]);
  const checkAll = checkedList.length === options.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < options.length;
  const onChange = (e: string[]) => setCheckedList(e);
  const onChangeAll: CheckboxProps['onChange'] = (e) => {
    setCheckedList(
      e.target.checked ? options.map((option) => option.value as string) : [],
    );
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
              <Text type="sm-normal">
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
