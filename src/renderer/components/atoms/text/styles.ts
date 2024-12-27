import { ColorType } from '@styles/colors';
import { TextColor } from './types';

export const textColorStyles = ({ color }: { color: TextColor | ColorType }) => {
  const styles = [''];
  if (color === 'primary') {
    styles.push('text-primary-500');
  } else if (color === 'gray') {
    styles.push('text-gray-500');
  } else if (color === 'slate') {
    styles.push('text-slate-500');
  } else if (color === 'red') {
    styles.push('text-red-500');
  } else if (color === 'orange') {
    styles.push('text-orange-500');
  } else if (color === 'lime') {
    styles.push('text-lime-500');
  } else if (color === 'green') {
    styles.push('text-green-500');
  } else if (color === 'emerald') {
    styles.push('text-emerald-500');
  } else if (color === 'teal') {
    styles.push('text-teal-500');
  } else if (color === 'cyan') {
    styles.push('text-cyan-500');
  } else if (color === 'blue') {
    styles.push('text-blue-500');
  } else if (color === 'violet') {
    styles.push('text-violet-500');
  } else if (color === 'purple') {
    styles.push('text-purple-500');
  } else if (color === 'pink') {
    styles.push('text-pink-500');
  } else if (color === 'rose') {
    styles.push('text-rose-500');
  }
  return styles.join(' ');
};
