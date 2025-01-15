import { publicRoutes } from '@routes';
import { DefaultOptionType } from 'antd/es/select';
import { EquipmentType } from './types';

export const navigateOptions: DefaultOptionType[] = publicRoutes.map(
  ({ label, path }) => ({ label, value: path }),
);

export const equipmentOptions: EquipmentType[] = [
  {
    label: '지게차(2)',
    value: 'forklift',
    camera: 2,
  },
  {
    label: '대차(2)',
    value: 'cart',
    camera: 2,
  },
  {
    label: '크레인(8)',
    value: 'crane',
    camera: 8,
  },
  {
    label: '트랜스포터(3)',
    value: 'trasporter',
    camera: 3,
  },
];
