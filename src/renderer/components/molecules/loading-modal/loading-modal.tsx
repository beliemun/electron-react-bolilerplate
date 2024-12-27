import loading_white from '@assets/lotties/loading-white.lottie';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@common/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Text } from '@components/atoms';
import { LoadingModalProps } from './types';

export const LoadingModal = ({
  loading = true,
  loadingMessage = undefined,
  onClose,
}: LoadingModalProps) => {
  const [visible, setVisible] = useState(true);

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
          className={cn(
            'fixed flex flex-col justify-center items-center w-full h-full min-h-screen',
            'top-0 left-0 bottom-0 right-0 m-auto gap-4 z-50',
            'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
          )}
        >
          <div
            className={
              'relative flex flex-col justify-center items-center min-w-32'
            }
          >
            <DotLottieReact
              src={loading_white}
              speed={1}
              loop
              autoplay
              className="size-32"
            />
            {loadingMessage ? (
              <Text type="lg-normal" color="invert">
                {loadingMessage}
              </Text>
            ) : null}
          </div>
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
