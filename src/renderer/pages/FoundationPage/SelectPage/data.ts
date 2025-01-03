import { colorList } from '@styles/colors';
import { DefaultOptionType } from 'antd/es/select';
import { SelectProps } from 'antd/lib';

export const options1: DefaultOptionType[] = [
  {
    value: 'brain',
    label: 'Brian',
  },
  {
    value: 'ben',
    label: 'Ben',
  },
  {
    value: 'wendy',
    label: 'Wedny',
  },
  {
    value: 'toby',
    label: 'Toby',
  },
];

export const options2: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options2.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

export const options3: SelectProps['options'] = colorList.map((color) => ({
  value: color,
}));
