import {
  TimePicker as TimePickerAntd,
  TimePickerProps as TimePickerAntdProps,
} from 'antd';
import { ConfigProvider } from './config-provider';
import RangePicker from './range-picker';
import koKR from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import './styles.css';
import { useDarkModeStore } from '@stores';
import { cn } from '@common/utils';

interface TimePickerProps extends TimePickerAntdProps {}

const TimePicker = ({
  className,
  size = 'middle',
  showNow = false,
  ...rest
}: TimePickerProps) => {
  const { isDarkMode } = useDarkModeStore();

  return (
    <ConfigProvider>
      <TimePickerAntd
        locale={koKR}
        className={cn(isDarkMode && 'dark', className)}
        showNow={showNow}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

TimePicker.RangePicker = RangePicker;

export default TimePicker;
