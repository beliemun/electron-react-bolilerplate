import { Transfer } from '@components/molecules';
import { TransferProps } from 'antd';
import { useState } from 'react';

interface RecordType {
  key: number;
  title: string;
  description: string;
  disabled: boolean;
}

const mockData = Array.from({ length: 20 }).map<RecordType>((_, i) => ({
  key: i,
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
  disabled: i % 3 === 0,
}));

const initialTargetKeys = mockData
  .filter(({ key }) => key > 10)
  .map((item) => item.key);

export const BasicTransfer = ({ className }: { className?: string }) => {
  const [targetKeys, setTargetKeys] =
    useState<TransferProps['targetKeys']>(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<TransferProps['targetKeys']>(
    [],
  );

  const onChange: TransferProps['onChange'] = (
    nextTargetKeys,
    direction,
    moveKeys,
  ) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };
  const onSelectChange: TransferProps['onSelectChange'] = (
    sourceSelectedKeys,
    targetSelectedKeys,
  ) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };
  const onScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };
  const onSerach: TransferProps['onSearch'] = (direction, value) => {
    console.log('search:', direction, value);
  };

  return (
    <Transfer
      className={className}
      dataSource={mockData}
      showSearch
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChange}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      onSearch={onSerach}
      render={(item) => item.title}
      listStyle={{
        width: '100%',
        height: 320,
      }}
    />
  );
};
