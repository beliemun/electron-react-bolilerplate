import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@common/utils';
import { Loading, Text } from '@components/atoms';
import { LoadingModalProps } from './types';
import { useDarkModeStore } from '@stores';

export const LoadingModal = ({
  loading = true,
  message = undefined,
  onClose,
}: LoadingModalProps) => {
  const [visible, setVisible] = useState(true);
  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    setVisible(loading);
    if (!loading) {
      setTimeout(() => {
        onClose?.();
      }, 500);
    }
  }, [loading, onClose]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: isDarkMode
              ? 'rgba(30, 30, 30, 0.7)'
              : 'rgba(240, 240, 240, 0.7)',
          }}
          className={cn(
            'fixed flex flex-col justify-center items-center w-full h-full min-h-screen',
            'inset-0 m-auto backdrop-blur-sm',
          )}
        >
          <div
            className={
              'relative flex flex-col justify-center items-center min-w-32'
            }
          >
            <Loading color="priarmy" />
            {message ? (
              <Text type="lg-normal" className="mt-4">
                {message}
              </Text>
            ) : null}
          </div>
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
