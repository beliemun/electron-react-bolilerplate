import { Button, Text, Title } from '@components/atoms';
import { buttonTypes } from '@components/atoms/button/types';
import { useDarkModeStore } from '@stores';
import { theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const naviagte = useNavigate();
  const { isDarkMode, setDarkMode } = useDarkModeStore();
  const {
    token: { colorBgBase },
  } = theme.useToken();
  const handleClick = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <main
      style={{ backgroundColor: colorBgBase }}
      className={'flex flex-col justify-center items-center h-screen gap-10'}
    >
      <button onClick={handleClick}>Change</button>
      <div className="flex flex-col gap-2 pb-6">
        {buttonTypes.map((type, index) => (
          <div
            className="flex flex-row flex-wrap gap-2 px-8 py-2"
            key={`${type}_${index}`}
          >
            <Button buttonSize="xs" buttonStyle={type}>
              xs {type}
            </Button>
            <Button buttonSize="sm" buttonStyle={type}>
              sm {type}
            </Button>
            <Button
              tooltipTitle="Button"
              buttonSize="default"
              buttonStyle={type}
            >
              default {type}
            </Button>
            <Button buttonSize="default" buttonStyle={type} loading>
              default {type}
            </Button>
            <Button buttonSize="default" buttonStyle={type} disabled>
              disabled {type}
            </Button>
          </div>
        ))}
      </div>
      <Title>DarkMode: {String(isDarkMode)}</Title>
      <Text>DarkMode: {String(isDarkMode)}</Text>
    </main>
  );
};

export default HomePage;
