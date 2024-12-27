import { cn } from '@common/utils';
import { ColorType } from '@styles/colors';
import { ButtonProps, ButtonStyleType } from './types';

export const buttonStyles = ({
  buttonRound,
  buttonStyle,
  buttonSize,
  buttonColor,
  fullWidth,
  disabled,
  loading,
}: Omit<ButtonProps, 'tooltipTitle' | 'tooltipStyle' | 'tooltipPlacement' | 'onClick'>): string => {
  const styles = [''];
  styles.push('transition-all duration-200 ease-in-out');
  // Button Color
  if (buttonColor === 'primary') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-primary-500',
          'active:bg-primary-600',
          'hover:bg-primary-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-primary-500 bg-white border border-primary-500',
          'active:text-primary-600 active:border-primary-600',
          'hover:border-primary-400 hover:text-primary-400',
          'dark:bg-transparent dark:hover:border-primary-400 dark:hover:text-primary-400 dark:actice:border-primary-600 dark:active:text-primary-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-primary-500',
          'active:bg-primary-100 active:text-primary-800 hover:bg-primary-100',
          'dark:hover:bg-primary-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-primary-800 bg-primary-50',
          'hover:bg-primary-100 active:bg-primary-200',
          'dark:text-white/70 dark:bg-primary-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'slate') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-slate-500',
          'active:bg-slate-600',
          'hover:bg-slate-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-slate-500 bg-white border border-slate-500',
          'active:text-slate-600 active:border-slate-600',
          'hover:border-slate-400 hover:text-slate-400',
          'dark:bg-transparent dark:hover:border-slate-400 dark:hover:text-slate-400 dark:actice:border-slate-600 dark:active:text-slate-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-slate-500',
          'active:bg-slate-100 active:text-slate-800 hover:bg-slate-100',
          'dark:hover:bg-slate-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-slate-800 bg-slate-100',
          'hover:bg-slate-200 active:bg-slate-200',
          'dark:text-white/70 dark:bg-slate-400/10 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'gray') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-gray-500', 'active:bg-gray-600', 'hover:bg-gray-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-gray-500 bg-white border border-gray-500',
          'active:text-gray-600 active:border-gray-600',
          'hover:border-gray-400 hover:text-gray-400',
          'dark:bg-transparent dark:hover:border-gray-400 dark:hover:text-gray-400 dark:actice:border-gray-600 dark:active:text-gray-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-gray-500',
          'active:bg-gray-100 active:text-gray-800 hover:bg-gray-100',
          'dark:hover:bg-gray-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-gray-800 bg-gray-100',
          'hover:bg-gray-200 active:bg-gray-200',
          'dark:text-white/70 dark:bg-gray-400/10 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'red') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-red-500', 'active:bg-red-600', 'hover:bg-red-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-red-500 bg-white border border-red-500',
          'active:text-red-600 active:border-red-600',
          'hover:border-red-400 hover:text-red-400',
          'dark:bg-transparent dark:hover:border-red-400 dark:hover:text-red-400 dark:actice:border-red-600 dark:active:text-red-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-red-500',
          'active:bg-red-100 active:text-red-800 hover:bg-red-100',
          'dark:hover:bg-red-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-red-800 bg-red-50',
          'hover:bg-red-100 active:bg-red-200',
          'dark:text-white/70 dark:bg-red-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'orange') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-orange-500',
          'active:bg-orange-600',
          'hover:bg-orange-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-orange-500 bg-white border border-orange-500',
          'active:text-orange-600 active:border-orange-600',
          'hover:border-orange-400 hover:text-orange-400',
          'dark:bg-transparent dark:hover:border-orange-400 dark:hover:text-orange-400 dark:actice:border-orange-600 dark:active:text-orange-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-orange-500',
          'active:bg-orange-100 active:text-orange-800 hover:bg-orange-100',
          'dark:hover:bg-orange-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-orange-800 bg-orange-50',
          'hover:bg-orange-100 active:bg-orange-200',
          'dark:text-white/70 dark:bg-orange-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'yellow') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-yellow-500',
          'active:bg-yellow-600',
          'hover:bg-yellow-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-yellow-500 bg-white border border-yellow-500',
          'active:text-yellow-600 active:border-yellow-600',
          'hover:border-yellow-400 hover:text-yellow-400',
          'dark:bg-transparent dark:hover:border-yellow-400 dark:hover:text-yellow-400 dark:actice:border-yellow-600 dark:active:text-yellow-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-yellow-500',
          'active:bg-yellow-100 active:text-yellow-800 hover:bg-yellow-100',
          'dark:hover:bg-yellow-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-yellow-800 bg-yellow-50',
          'hover:bg-yellow-100 active:bg-yellow-200',
          'dark:text-white/70 dark:bg-yellow-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'lime') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-lime-500', 'active:bg-lime-600', 'hover:bg-lime-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-lime-500 bg-white border border-lime-500',
          'active:text-lime-600 active:border-lime-600',
          'hover:border-lime-400 hover:text-lime-400',
          'dark:bg-transparent dark:hover:border-lime-400 dark:hover:text-lime-400 dark:actice:border-lime-600 dark:active:text-lime-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-lime-500',
          'active:bg-lime-100 active:text-lime-800 hover:bg-lime-100',
          'dark:hover:bg-lime-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-lime-800 bg-lime-50',
          'hover:bg-lime-100 active:bg-lime-200',
          'dark:text-white/70 dark:bg-lime-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'green') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-green-500',
          'active:bg-green-600',
          'hover:bg-green-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-green-500 bg-white border border-green-500',
          'active:text-green-600 active:border-green-600',
          'hover:border-green-400 hover:text-green-400',
          'dark:bg-transparent dark:hover:border-green-400 dark:hover:text-green-400 dark:actice:border-green-600 dark:active:text-green-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-green-500',
          'active:bg-green-100 active:text-green-800 hover:bg-green-100',
          'dark:hover:bg-green-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-green-800 bg-green-50',
          'hover:bg-green-100 active:bg-green-200',
          'dark:text-white/70 dark:bg-green-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'emerald') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-emerald-500',
          'active:bg-emerald-600',
          'hover:bg-emerald-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-emerald-500 bg-white border border-emerald-500',
          'active:text-emerald-600 active:border-emerald-600',
          'hover:border-emerald-400 hover:text-emerald-400',
          'dark:bg-transparent dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:actice:border-emerald-600 dark:active:text-emerald-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-emerald-500',
          'active:bg-emerald-100 active:text-emerald-800 hover:bg-emerald-100',
          'dark:hover:bg-emerald-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-emerald-800 bg-emerald-50',
          'hover:bg-emerald-100 active:bg-emerald-200',
          'dark:text-white/70 dark:bg-emerald-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'teal') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-teal-500', 'active:bg-teal-600', 'hover:bg-teal-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-teal-500 bg-white border border-teal-500',
          'active:text-teal-600 active:border-teal-600',
          'hover:border-teal-400 hover:text-teal-400',
          'dark:bg-transparent dark:hover:border-teal-400 dark:hover:text-teal-400 dark:actice:border-teal-600 dark:active:text-teal-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-teal-500',
          'active:bg-teal-100 active:text-teal-800 hover:bg-teal-100',
          'dark:hover:bg-teal-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-teal-800 bg-teal-50',
          'hover:bg-teal-100 active:bg-teal-200',
          'dark:text-white/70 dark:bg-teal-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'cyan') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-cyan-500', 'active:bg-cyan-600', 'hover:bg-cyan-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-cyan-500 bg-white border border-cyan-500',
          'active:text-cyan-600 active:border-cyan-600',
          'hover:border-cyan-400 hover:text-cyan-400',
          'dark:bg-transparent dark:hover:border-cyan-400 dark:hover:text-cyan-400 dark:actice:border-cyan-600 dark:active:text-cyan-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-cyan-500',
          'active:bg-cyan-100 active:text-cyan-800 hover:bg-cyan-100',
          'dark:hover:bg-cyan-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-cyan-800 bg-cyan-50',
          'hover:bg-cyan-100 active:bg-cyan-200',
          'dark:text-white/70 dark:bg-cyan-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'blue') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-blue-500', 'active:bg-blue-600', 'hover:bg-blue-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-blue-500 bg-white border border-blue-500',
          'active:text-blue-600 active:border-blue-600',
          'hover:border-blue-400 hover:text-blue-400',
          'dark:bg-transparent dark:hover:border-blue-400 dark:hover:text-blue-400 dark:actice:border-blue-600 dark:active:text-blue-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-blue-500',
          'active:bg-blue-100 active:text-blue-800 hover:bg-blue-100',
          'dark:hover:bg-blue-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-blue-800 bg-blue-50',
          'hover:bg-blue-100 active:bg-blue-200',
          'dark:text-white/70 dark:bg-blue-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'violet') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-violet-500',
          'active:bg-violet-600',
          'hover:bg-violet-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-violet-500 bg-white border border-violet-500',
          'active:text-violet-600 active:border-violet-600',
          'hover:border-violet-400 hover:text-violet-400',
          'dark:bg-transparent dark:hover:border-violet-400 dark:hover:text-violet-400 dark:actice:border-violet-600 dark:active:text-violet-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-violet-500',
          'active:bg-violet-100 active:text-violet-800 hover:bg-violet-100',
          'dark:hover:bg-violet-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-violet-800 bg-violet-50',
          'hover:bg-violet-100 active:bg-violet-200',
          'dark:text-white/70 dark:bg-violet-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'purple') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn(
          'text-white bg-purple-500',
          'active:bg-purple-600',
          'hover:bg-purple-400',
          'dark:text-black',
        ),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-purple-500 bg-white border border-purple-500',
          'active:text-purple-600 active:border-purple-600',
          'hover:border-purple-400 hover:text-purple-400',
          'dark:bg-transparent dark:hover:border-purple-400 dark:hover:text-purple-400 dark:actice:border-purple-600 dark:active:text-purple-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-purple-500',
          'active:bg-purple-100 active:text-purple-800 hover:bg-purple-100',
          'dark:hover:bg-purple-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-purple-800 bg-purple-50',
          'hover:bg-purple-100 active:bg-purple-200',
          'dark:text-white/70 dark:bg-purple-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'pink') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-pink-500', 'active:bg-pink-600', 'hover:bg-pink-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-pink-500 bg-white border border-pink-500',
          'active:text-pink-600 active:border-pink-600',
          'hover:border-pink-400 hover:text-pink-400',
          'dark:bg-transparent dark:hover:border-pink-400 dark:hover:text-pink-400 dark:actice:border-pink-600 dark:active:text-pink-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-pink-500',
          'active:bg-pink-100 active:text-pink-800 hover:bg-pink-100',
          'dark:hover:bg-pink-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-pink-800 bg-pink-50',
          'hover:bg-pink-100 active:bg-pink-200',
          'dark:text-white/70 dark:bg-pink-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  if (buttonColor === 'rose') {
    if (buttonStyle === 'solid') {
      styles.push(
        cn('text-white bg-rose-500', 'active:bg-rose-600', 'hover:bg-rose-400', 'dark:text-black'),
      );
    } else if (buttonStyle === 'outline') {
      styles.push(
        cn(
          'text-rose-500 bg-white border border-rose-500',
          'active:text-rose-600 active:border-rose-600',
          'hover:border-rose-400 hover:text-rose-400',
          'dark:bg-transparent dark:hover:border-rose-400 dark:hover:text-rose-400 dark:actice:border-rose-600 dark:active:text-rose-600',
        ),
      );
    } else if (buttonStyle === 'ghost') {
      styles.push(
        cn(
          'text-rose-500',
          'active:bg-rose-100 active:text-rose-800 hover:bg-rose-100',
          'dark:hover:bg-rose-500/30 dark:hover:text-white',
        ),
      );
    } else if (buttonStyle === 'soft') {
      styles.push(
        cn(
          'text-rose-800 bg-rose-50',
          'hover:bg-rose-100 active:bg-rose-200',
          'dark:text-white/70 dark:bg-rose-900/30 dark:hover:text-white',
        ),
      );
    }
  }
  // Rounded Style
  if (buttonRound === 'round') {
    if (buttonSize === 'xs') {
      styles.push('rounded-md');
    } else {
      styles.push('rounded-lg');
    }
  } else if (buttonRound === 'pill') {
    styles.push('rounded-full');
  }
  // Text Size
  if (buttonSize === 'default') {
    styles.push('text-sm px-5 leading-12 h-12');
  } else if (buttonSize === 'sm') {
    styles.push('text-sm px-4 leading-10 h-10');
  } else if (buttonSize === 'xs') {
    styles.push('text-xs px-3 leading-6 h-6');
  }
  // Full Width Style
  if (fullWidth) {
    styles.push('flex-1 w-full');
  }
  // Disabled Style
  if (disabled) {
    styles.push(
      cn(
        'text-slate-300 bg-slate-100 border border-slate-300 cursor-not-allowed select-none',
        'hover:bg-slate-100 hover:border-slate-300 hover:text-slate-300 hover:bg-slate-100',
        'active:bg-slate-100 active:border-slate-300 active:text-slate-300 active:ring-0',
        'dark:disabled:bg-slate-900 dark:disabled:border-slate-700 dark:disabled:text-slate-700',
      ),
    );
    if (buttonStyle === 'ghost') {
      styles.push('border-0 bg-white hover:bg-white active:bg-white');
    }
  }
  // Button Loading
  if (loading) {
    styles.push('pointer-events-none select-none opacity-50');
  }
  styles.push('focus:outline-none');
  return styles.join(' ');
};

export const waveStyles = ({
  buttonColor,
  buttonStyle,
}: {
  buttonColor: ColorType;
  buttonStyle: ButtonStyleType;
  disabled?: boolean;
  loading?: boolean;
}) => {
  const styles = [''];
  // Button Color
  if (buttonColor === 'primary') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-primary-500/10 dark:bg-primary-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-primary-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-primary-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'slate') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-slate-500/10 dark:bg-slate-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-slate-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-slate-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'gray') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-gray-500/10 dark:bg-gray-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-gray-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-gray-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'red') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-red-500/10 dark:bg-red-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-red-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-red-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'orange') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-orange-500/10 dark:bg-orange-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-orange-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-orange-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'yellow') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-yellow-500/10 dark:bg-yellow-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-yellow-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-yellow-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'lime') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-lime-500/10 dark:bg-lime-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-lime-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-lime-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'green') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-green-500/10 dark:bg-green-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-green-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-green-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'emerald') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-emerald-500/10 dark:bg-emerald-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-emerald-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-emerald-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'teal') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-teal-500/10 dark:bg-teal-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-teal-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-teal-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'cyan') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-cyan-500/10 dark:bg-cyan-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-cyan-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-cyan-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'blue') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-blue-500/10 dark:bg-blue-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-blue-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-blue-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'violet') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-violet-500/10 dark:bg-violet-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-violet-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-violet-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'purple') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-purple-500/10 dark:bg-purple-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-purple-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-purple-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'pink') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-pink-500/10 dark:bg-pink-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-pink-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-pink-500/10 dark:bg-white/10');
    }
  } else if (buttonColor === 'rose') {
    if (buttonStyle === 'solid') {
      styles.push('bg-white/20');
    } else if (buttonStyle === 'outline') {
      styles.push('bg-rose-500/10 dark:bg-rose-500/20');
    } else if (buttonStyle === 'ghost') {
      styles.push('bg-rose-500/10 dark:bg-white/10');
    } else if (buttonStyle === 'soft') {
      styles.push('bg-rose-500/10 dark:bg-white/10');
    }
  }
  return styles.join(' ');
};
