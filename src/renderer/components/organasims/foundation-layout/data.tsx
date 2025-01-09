import {
  FontSizeOutlined,
  FormatPainterOutlined,
  SlidersOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    label: 'Color Pallete',
    key: 'color-pallet',
    icon: <FormatPainterOutlined />,
  },
  {
    label: 'Typography',
    key: 'typography',
    icon: <FontSizeOutlined />,
    children: [
      { label: '<Text />', key: 'text' },
      { label: '<Title />', key: 'title' },
    ],
  },
  {
    label: 'Components',
    key: 'components',
    icon: <SlidersOutlined />,
    children: [
      { label: '<Alert />', key: 'alert' },
      { label: '<Button />', key: 'button' },
      { label: '<Checkbox />', key: 'checkbox' },
      { label: '<Drawer />', key: 'drawer' },
      { label: '<Form />', key: 'form' },
      { label: '<Image />', key: 'image' },
      { label: '<Input />', key: 'input' },
      { label: '<Message />', key: 'message' },
      { label: '<Modal />', key: 'modal' },
      { label: '<Radio />', key: 'radio' },
      { label: '<Select />', key: 'select' },
      { label: '<Switch />', key: 'switch' },
      { label: '<Table />', key: 'table' },
      { label: '<Tag />', key: 'tag' },
      { label: '<Tooltip />', key: 'tooltip' },
      { label: '<Transfer />', key: 'transfer' },
    ],
  },
];
