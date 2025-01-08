import { SyncOutlined } from '@ant-design/icons';
import { Divider, Space, Tag } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { colorList } from '@styles/colors';

const TagPage = () => {
  return (
    <PageLayout title="<Tag />">
      {colorList.map((color, index) => (
        <div key={index}>
          <Divider orientation="left">{color.toUpperCase()}</Divider>
          <Space direction="vertical" gap={8} className="p-4">
            <div className="flex flex-row flex-wrap gap-2">
              <Tag tagColor={color} tagStyle="outline" tagSize="sm">
                outline sm
              </Tag>
              <Tag
                tagColor={color}
                tagStyle="outline"
                tagSize="sm"
                icon={<SyncOutlined spin />}
              >
                outline sm with icon
              </Tag>
              <Tag tagColor={color} tagStyle="soft" tagSize="sm">
                soft sm
              </Tag>
              <Tag tagColor={color} tagStyle="solid" tagSize="sm">
                solid sm
              </Tag>
            </div>
            <div className="flex flex-row flex-wrap gap-1">
              <Tag tagColor={color} tagStyle="outline" tagSize="default">
                outline default
              </Tag>
              <Tag
                tagColor={color}
                tagStyle="outline"
                tagSize="default"
                icon={<SyncOutlined spin />}
              >
                outline default with icon
              </Tag>
              <Tag tagColor={color} tagStyle="soft" tagSize="default">
                soft default
              </Tag>
              <Tag tagColor={color} tagStyle="solid" tagSize="default">
                solid default
              </Tag>
            </div>
          </Space>
        </div>
      ))}
    </PageLayout>
  );
};

export default TagPage;
