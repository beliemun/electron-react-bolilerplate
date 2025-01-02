import { capitalizeFirstLetter } from '@common/utils';
import { Divider } from '@components/atoms';
import { PageLayout } from '@components/organasims';
import { ColorPaletteItems } from './components/color-palette-item';
import { colorList } from '@styles/colors';

const ColorPalletPage = () => {
  return (
    <PageLayout title="Colors">
      {colorList.map((color, key) => (
        <div key={key}>
          <Divider orientation="left">{capitalizeFirstLetter(color)}</Divider>
          <ColorPaletteItems color={color} key={`#2_${color}_${key}`} />
        </div>
      ))}
    </PageLayout>
  );
};

export default ColorPalletPage;
