import { cn } from '@common/utils';
import { MotionProps, Variants, motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10, transition: { duration: 0.5, ease: 'easeOut' } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const animationProps = {
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};

export const Section = ({
  className,
  children,
  ...rest
}: SectionProps & MotionProps) => {
  return (
    <motion.section
      variants={containerVariants}
      {...animationProps}
      className={cn(`flex flex-wrap w-full p-4 gap-4`, className)}
      {...rest}
    >
      {children}
    </motion.section>
  );
};
