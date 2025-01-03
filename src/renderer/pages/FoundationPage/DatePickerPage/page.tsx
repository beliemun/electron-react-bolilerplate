import { Card, DatePicker, Section, Space } from '@components/atoms';
import { PageLayout } from '@components/organasims';

const DatePickerPage = () => {
  return (
    <PageLayout title="<DatePicker />">
      <Section className="flex flex-row flex-wrap gap-4">
        <Card title="Size">
          <Space direction="vertical" gap={16}>
            <DatePicker size="small" placeholder="small" />
            <DatePicker size="middle" placeholder="middle" />
            <DatePicker size="large" placeholder="large" />
          </Space>
        </Card>
        <Card title="Select">
          <Space direction="vertical" gap={16}>
            <DatePicker placeholder="일 선택" />
            <DatePicker placeholder="주 선택" picker="week" />
            <DatePicker placeholder="달 선택" picker="month" />
            <DatePicker placeholder="연도 선택" picker="year" />
          </Space>
        </Card>
        <Card title="Range">
          <Space direction="vertical" gap={16}>
            <DatePicker.RangePicker />
            <DatePicker.RangePicker status={'warning'} />
            <DatePicker.RangePicker status={'error'} />
            <DatePicker.RangePicker
              disabled={[true, true]}
              allowEmpty={[true, true]}
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default DatePickerPage;
