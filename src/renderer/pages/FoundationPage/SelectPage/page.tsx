import { DownOutlined } from '@ant-design/icons';
import { Divider, Section, Select, SelectProps, Tag } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { useState } from 'react';
import { options1, options2, options3 } from './data';

const SelectPage = () => {
  const [value, setValue] = useState<string[]>(['b11']);
  const suffixIcon = (
    <>
      <span>{value.length} / 3</span>
      <DownOutlined />
    </>
  );

  const [selectedTags, setSelectedTags] = useState([
    'red',
    'lime',
    'cyan',
    'rose',
  ]);

  const handleClose = (removedTag: string) => {
    const tags = selectedTags.filter((tag) => tag !== removedTag);
    setSelectedTags(tags);
  };

  const tagRender: SelectProps['tagRender'] = ({
    label,
    value,
    closable,
    onClose,
  }) => {
    return (
      <Tag
        tagColor={value}
        closable={closable}
        onClose={() => {
          onClose();
          handleClose(value);
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <PageLayout title="<Select />">
      <Divider orientation="left">Size</Divider>
      <Section>
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          size="small"
        />
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          size="middle"
        />
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          size="large"
        />
      </Section>
      <Divider orientation="left">Variants</Divider>
      <Section className="pt-2 ">
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          loading
        />
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          disabled
        />
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          status="warning"
        />
        <Select
          style={{ width: 120 }}
          options={options1}
          defaultValue={'brain'}
          status="error"
        />
      </Section>
      <Divider orientation="left">Multiple Mode</Divider>
      <Section>
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="multiple"
          allowClear
          defaultValue={['a10', 'b11', 'c12']}
        />
      </Section>
      <Divider orientation="left">Tags Mode</Divider>
      <Section>
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="tags"
          allowClear
          defaultValue={['d11', 'new']}
        />
      </Section>
      <Divider orientation="left">Max Count</Divider>
      <Section>
        <Select
          className="max-w-xl w-full"
          options={options2}
          mode="multiple"
          maxCount={3}
          suffixIcon={suffixIcon}
          onChange={setValue}
          defaultValue={['b11']}
        />
      </Section>
      <Divider orientation="left">With Tags</Divider>
      <Section>
        <Select
          className="max-w-xl w-full"
          options={options3}
          mode="multiple"
          tagRender={tagRender}
          value={selectedTags}
          onChange={setSelectedTags}
        />
      </Section>
    </PageLayout>
  );
};

export default SelectPage;
