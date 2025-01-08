import { theme } from 'antd';
import { cn } from '@common/utils';
import { useDarkModeStore } from '@stores';
import { Switch } from '@components/atoms';

export const Footer = () => {
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const {
    token: { colorBorder, colorBgContainer },
  } = theme.useToken();

  const handleChangeDarkMode = (value: boolean) => setDarkMode(value);

  return (
    <footer
      style={{
        backgroundColor: colorBgContainer,
        borderTop: `1px solid ${colorBorder}`,
        borderRight: `1px solid ${colorBorder}`,
      }}
      className={cn(
        `fixed bottom-0 transition-all duration-200 ease-in-out`,
        'row-center w-64 h-[60px]',
      )}
    >
      <Switch
        value={isDarkMode}
        checkedChildren={'Dark Mode'}
        unCheckedChildren={'Dark Mode'}
        onChange={handleChangeDarkMode}
      ></Switch>
    </footer>
  );
};
