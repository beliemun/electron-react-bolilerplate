import { AnimatePresence, motion } from 'framer-motion';
import { AnimateProps } from './types';
import { animations } from './animations';
import { useEffect, useState } from 'react';
import { cn } from '@common/utils';

const Animate = ({
  style,
  className,
  name,
  type = 'show-up',
  layoutId,
  transition,
  children,
}: AnimateProps) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => setIsMount(true), []);

  return isMount ? (
    <AnimatePresence>
      <motion.div
        style={{ ...style }}
        className={cn('col-center size-full', className)}
        key={name}
        variants={animations[type]}
        initial={'initial'}
        animate={{
          ...animations[type]['animate'],
          ...(transition && { transition: { ...transition } }),
        }}
        exit={'exit'}
        layoutId={layoutId}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default Animate;
