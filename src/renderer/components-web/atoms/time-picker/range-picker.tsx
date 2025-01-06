import { RangePickerProps } from 'antd/es/date-picker';
import { CSSProperties } from 'react';
import { TimePicker } from 'antd';
import { ConfigProvider } from './config-provider';
import koKR from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import './styles.css';
import { useDarkModeStore } from '@stores';
import { cn } from '@common/utils';

interface RangePickProps extends RangePickerProps {
  style?: CSSProperties;
  className?: string;
}

const RangePicker = ({
  style,
  className,
  size = 'middle',
  ...rest
}: RangePickProps) => {
  const { isDarkMode } = useDarkModeStore();
  return (
    <ConfigProvider>
      <TimePicker.RangePicker
        locale={koKR}
        style={{ ...style }}
        className={cn(isDarkMode && 'dark', className)}
        size={size}
        {...rest}
      />
    </ConfigProvider>
  );
};

export default RangePicker;
