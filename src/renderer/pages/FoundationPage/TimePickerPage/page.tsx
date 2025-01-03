import { Card, Section, Space, TimePicker } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import dayjs from 'dayjs';

const TimePickerPage = () => {
  return (
    <PageLayout title="<TimePicker />">
      <Section>
        <Card title="Size">
          <Space direction="vertical" gap={16}>
            <TimePicker
              size="small"
              format={'HH:mm a'}
              minuteStep={15}
              defaultValue={dayjs('08:15 am', 'HH:mm a')}
            />
            <TimePicker
              size="middle"
              format={'HH:mm a'}
              minuteStep={15}
              defaultValue={dayjs('08:15 am', 'HH:mm a')}
            />
            <TimePicker
              size="large"
              format={'HH:mm a'}
              minuteStep={15}
              defaultValue={dayjs('08:15 am', 'HH:mm a')}
            />
          </Space>
        </Card>
        <Card title="Variants">
          <Space direction="vertical" gap={16}>
            <TimePicker
              size="middle"
              format={'HH:mm a'}
              minuteStep={15}
              variant="outlined"
            />
            <TimePicker
              size="middle"
              format={'HH:mm a'}
              minuteStep={15}
              variant="filled"
            />
            <TimePicker
              size="middle"
              format={'HH:mm a'}
              minuteStep={15}
              variant="borderless"
            />
          </Space>
        </Card>
        <Card title="Range">
          <Space direction="vertical" gap={16}>
            <TimePicker.RangePicker format={'HH:mm a'} minuteStep={15} />
            <TimePicker.RangePicker
              format={'HH:mm a'}
              minuteStep={15}
              status="warning"
            />
            <TimePicker.RangePicker
              format={'HH:mm a'}
              minuteStep={15}
              status="error"
            />
            <TimePicker.RangePicker
              format={'HH:mm a'}
              minuteStep={15}
              disabled
              allowEmpty
            />
          </Space>
        </Card>
      </Section>
    </PageLayout>
  );
};

export default TimePickerPage;
