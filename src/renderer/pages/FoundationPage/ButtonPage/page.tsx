import { HomeOutlined } from '@ant-design/icons';
import { Button, Divider, Tooltip } from '@components/atoms';
import { buttonTypes } from '@components/atoms/button/types';
import { PageLayout } from '@components/organasims';
import { colorList } from '@styles/colors';

const ButtonPage = () => {
  return (
    <PageLayout title="<Button />">
      {colorList.map((color, index) => (
        <div key={`${color}_${index}`}>
          <Divider orientation="left">{color.toUpperCase()}</Divider>
          <div className="flex flex-col gap-2 pb-6">
            {buttonTypes.map((type, index) => (
              <div
                className="flex flex-row flex-wrap gap-2 px-8 py-2"
                key={`${type}_${index}`}
              >
                <Button buttonSize="xs" buttonColor={color} buttonStyle={type}>
                  xs {type}
                </Button>
                <Button buttonSize="sm" buttonColor={color} buttonStyle={type}>
                  sm {type}
                </Button>
                <Button
                  buttonSize="default"
                  buttonColor={color}
                  buttonStyle={type}
                >
                  default {type}
                </Button>
                <Button
                  buttonSize="default"
                  buttonColor={color}
                  buttonStyle={type}
                  loading
                >
                  default {type}
                </Button>
                <Button
                  buttonSize="default"
                  buttonColor={color}
                  buttonStyle={type}
                  disabled
                >
                  disabled {type}
                </Button>
                <Tooltip title="Home">
                  <Button
                    buttonSize="default"
                    buttonColor={color}
                    buttonStyle={type}
                  >
                    <HomeOutlined />
                  </Button>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageLayout>
  );
};

export default ButtonPage;
