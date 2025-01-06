export type TextColor =
  | 'primary'
  | 'default'
  | 'description'
  | 'disabled'
  | 'invert';

export type TextType =
  | 'sm-light'
  | 'sm-normal'
  | 'sm-semibold'
  | 'sm-bold'
  | 'base-light'
  | 'base-normal'
  | 'base-semibold'
  | 'base-bold'
  | 'lg-light'
  | 'lg-normal'
  | 'lg-semibold'
  | 'lg-bold';

export const TextStyle: Record<TextType, string> = {
  'sm-light': 'text-[24px] leading-[1.25] font-light',
  'sm-normal': 'text-[24px] leading-[1.25] font-normal',
  'sm-semibold': 'text-[24px] leading-[1.25] font-semibold',
  'sm-bold': 'text-[24px] leading-[1.25] font-bold',
  'base-light': 'text-[28px] leading-[1.25] font-light',
  'base-normal': 'text-[28px] leading-[1.25] font-normal',
  'base-semibold': 'text-[28px] leading-[1.25] font-semibold',
  'base-bold': 'text-[28px] leading-[1.25] font-bold',
  'lg-light': 'text-[36px] leading-[1.25] font-light',
  'lg-normal': 'text-[36px] leading-[1.25] font-normal',
  'lg-semibold': 'text-[36px] leading-[1.25] font-semibold',
  'lg-bold': 'text-[36px] leading-[1.25] font-bold',
};
