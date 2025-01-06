export type TextColor = 'primary' | 'default' | 'description' | 'disabled' | 'invert';

export type TextType =
  | 'xs-light'
  | 'xs-normal'
  | 'xs-regular'
  | 'xs-semibold'
  | 'xs-bold'
  | 'sm-light'
  | 'sm-normal'
  | 'sm-regular'
  | 'sm-semibold'
  | 'sm-bold'
  | 'base-light'
  | 'base-normal'
  | 'base-regular'
  | 'base-semibold'
  | 'base-bold'
  | 'lg-light'
  | 'lg-normal'
  | 'lg-regular'
  | 'lg-semibold'
  | 'lg-bold'
  | 'xl-light'
  | 'xl-normal'
  | 'xl-regular'
  | 'xl-semibold'
  | 'xl-bold';

export const TextStyle: Record<TextType, string> = {
  'xs-light': 'text-xs font-light',
  'xs-normal': 'text-xs font-normal',
  'xs-regular': 'text-xs font-regular',
  'xs-semibold': 'text-xs font-semibold',
  'xs-bold': 'text-xs font-bold',
  'sm-light': 'text-sm font-light',
  'sm-normal': 'text-sm font-normal',
  'sm-regular': 'text-sm font-regular',
  'sm-semibold': 'text-sm font-semibold',
  'sm-bold': 'text-sm font-bold',
  'base-light': 'text-base font-light',
  'base-normal': 'text-base font-normal',
  'base-regular': 'text-base font-regular',
  'base-semibold': 'text-base font-semibold',
  'base-bold': 'text-base font-bold',
  'lg-light': 'text-lg font-light',
  'lg-normal': 'text-lg font-normal',
  'lg-regular': 'text-lg font-regular',
  'lg-semibold': 'text-lg font-semibold',
  'lg-bold': 'text-lg font-bold',
  'xl-light': 'text-xl font-light',
  'xl-normal': 'text-xl font-normal',
  'xl-regular': 'text-xl font-regular',
  'xl-semibold': 'text-xl font-semibold',
  'xl-bold': 'text-xl font-bold',
};
