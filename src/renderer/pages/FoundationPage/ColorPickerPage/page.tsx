import { ColorPicker, Section, Space, Text } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { colors } from '@styles/colors';

const ColorPickerPage = () => {
  return (
    <PageLayout title="<ColorPicker />">
      <Section className="flex flex-col flex-wrap gap-4">
        <Space direction="horizontal" gap={8}>
          <ColorPicker defaultValue={colors.primary[500]} />
          <Text>basic color picker</Text>
        </Space>
        <Space direction="horizontal" gap={8}>
          <ColorPicker allowClear />
          <Text>with clear button</Text>
        </Space>
        <Space direction="horizontal" gap={8}>
          <ColorPicker
            defaultValue={colors.red[500]}
            defaultFormat="hex"
            showText
          />
          <Text>with hex</Text>
        </Space>
        <Space direction="horizontal" gap={8}>
          <ColorPicker
            defaultValue={colors.orange[500]}
            defaultFormat="hsb"
            showText
          />
          <Text>with hsb</Text>
        </Space>
        <Space direction="horizontal" gap={8}>
          <ColorPicker
            defaultValue={colors.yellow[500]}
            defaultFormat="rgb"
            showText
          />
          <Text>with rgb</Text>
        </Space>
      </Section>
    </PageLayout>
  );
};

export default ColorPickerPage;
