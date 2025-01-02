import { DatePicker } from 'antd';
import { ConfigProvider } from './config-provider';
import { RangePickerProps as RangePickerAntdProps } from 'antd/lib/date-picker';
import koKR from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import '../time-picker/styles.css';
import { useDarkModeStore } from '@stores';
import { cn } from '@common/utils';

interface RangePickerProps extends RangePickerAntdProps {}

const RangePicker = ({
  style,
  className,
  size = 'middle',
  ...rest
}: RangePickerProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider>
      <DatePicker.RangePicker
        locale={koKR}
        className={cn(isDarkMode && 'dark', className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default RangePicker;
