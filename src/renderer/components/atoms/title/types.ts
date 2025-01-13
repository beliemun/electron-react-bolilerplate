export type TitleColor =
  | 'primary'
  | 'white'
  | 'black'
  | 'default'
  | 'description'
  | 'disabled'
  | 'invert';

export type TitleType =
  | 'h1-normal'
  | 'h1-semibold'
  | 'h1-bold'
  | 'h2-normal'
  | 'h2-semibold'
  | 'h2-bold'
  | 'h3-normal'
  | 'h3-semibold'
  | 'h3-bold';

export const TitleStyle = {
  'h3-normal': 'text-[40px] leading-[1.25] font-normal',
  'h3-semibold': 'text-[40px] leading-[1.25] font-semibold',
  'h3-bold': 'text-[40px] leading-[1.25] font-bold',
  'h2-normal': 'text-[52px] leading-[1.25] font-normal',
  'h2-semibold': 'text-[52px] leading-[1.25] font-semibold',
  'h2-bold': 'text-[52px] leading-[1.25] font-bold',
  'h1-normal': 'text-[64px] leading-[1.25] font-normal',
  'h1-semibold': 'text-[64px] leading-[1.25] font-semibold',
  'h1-bold': 'text-[64px] leading-[1.25] font-bold',
};
