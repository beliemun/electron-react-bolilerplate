import color from 'tailwindcss/colors';

export type ColorType =
  | 'primary'
  | 'slate'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'violet'
  | 'purple'
  | 'pink'
  | 'rose';

export const colorList: ColorType[] = [
  'primary',
  'slate',
  'gray',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'blue',
  'violet',
  'purple',
  'pink',
  'rose',
];

type ColorKeyType =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export const colors: Record<ColorType, Record<ColorKeyType, string>> = {
  primary: color.violet,
  slate: color.slate,
  gray: color.gray,
  red: color.red,
  orange: color.orange,
  yellow: color.yellow,
  lime: color.lime,
  green: color.green,
  emerald: color.emerald,
  teal: color.teal,
  cyan: color.cyan,
  blue: color.blue,
  violet: color.violet,
  purple: color.purple,
  pink: color.pink,
  rose: color.rose,
};
