import { Section, Divider, Tag } from '@components/atoms';
import {
  BasicTransfer,
  DataType,
  mockData,
  TableTransfer,
  TableTransferProps,
} from './components';
import { PageLayout } from '@components/organasims';
import { capitalizeFirstLetter } from '@common/utils';
import { ColorType } from '@styles/colors';
import { useState } from 'react';
import { TransferProps } from '@components/molecules';
import { TableColumnsType } from 'antd';

export default function TransferPage() {
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>([]);
  const [disabled, setDisabled] = useState(false);

  const onChange: TableTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const columns: TableColumnsType<DataType> = [
    {
      dataIndex: 'title',
      title: 'Name',
    },
    {
      dataIndex: 'tag',
      title: 'Tag',
      render: (tag: string) => (
        <Tag style={{ marginInlineEnd: 0 }} tagColor={tag as ColorType}>
          {capitalizeFirstLetter(tag)}
        </Tag>
      ),
    },
    {
      dataIndex: 'description',
      title: 'Description',
    },
  ];

  const filterOption = (input: string, item: DataType) =>
    item.title?.includes(input) || item.tag?.includes(input);

  return (
    <PageLayout title="<Trasfer />">
      <Divider orientation="left">Basic Transfer</Divider>
      <Section>
        <BasicTransfer className="w-full" />
      </Section>
      <Divider orientation="left">Table Transfer</Divider>
      <Section>
        <TableTransfer
          className="w-full"
          dataSource={mockData}
          targetKeys={targetKeys}
          disabled={disabled}
          showSearch
          showSelectAll={false}
          onChange={onChange}
          filterOption={filterOption}
          leftColumns={columns}
          rightColumns={columns}
        />
      </Section>
    </PageLayout>
  );
}
