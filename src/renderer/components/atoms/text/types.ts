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
  | 'default-light'
  | 'default-normal'
  | 'default-semibold'
  | 'default-bold'
  | 'lg-light'
  | 'lg-normal'
  | 'lg-semibold'
  | 'lg-bold'
  | 'xl-light'
  | 'xl-normal'
  | 'xl-semibold'
  | 'xl-bold';

export const TextStyle: Record<TextType, string> = {
  'sm-light': 'text-[18px] leading-[1.25] font-light',
  'sm-normal': 'text-[18px] leading-[1.25] font-normal',
  'sm-semibold': 'text-[18px] leading-[1.25] font-semibold',
  'sm-bold': 'text-[18px] leading-[1.25] font-bold',
  'default-light': 'text-[24px] leading-[1.25] font-light',
  'default-normal': 'text-[24px] leading-[1.25] font-normal',
  'default-semibold': 'text-[24px] leading-[1.25] font-semibold',
  'default-bold': 'text-[24px] leading-[1.25] font-bold',
  'lg-light': 'text-[30px] leading-[1.25] font-light',
  'lg-normal': 'text-[30px] leading-[1.25] font-normal',
  'lg-semibold': 'text-[30px] leading-[1.25] font-semibold',
  'lg-bold': 'text-[30px] leading-[1.25] font-bold',
  'xl-light': 'text-[36px] leading-[1.25] font-light',
  'xl-normal': 'text-[36px] leading-[1.25] font-normal',
  'xl-semibold': 'text-[36px] leading-[1.25] font-semibold',
  'xl-bold': 'text-[36px] leading-[1.25] font-bold',
};
