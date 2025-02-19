import { CloseOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from './types';
import { useEffect, useState } from 'react';
import { useDarkModeStore } from '@stores';
import { Button, Loading, Text, Title } from '@components/atoms';
import { cn } from '@common/utils';

export const Modal = ({
  title = undefined,
  message = undefined,
  children,
  actions = [{ lable: 'Close', style: 'solid' }],
  footerDirection = 'right',
  footerFitable = false,
  loading = false,
  size = 720,
  onClose,
}: ModalProps) => {
  const [visible, setVisible] = useState(true);
  const [isSmallMode, setIsSmallMode] = useState(false);

  const { isDarkMode } = useDarkModeStore();
  const { colorBgContainer, boxShadow, colorText } = theme.useToken().token;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose?.(), 500);
  };

  useEffect(() => {
    const updateCollapsedWidth = () => {
      window.innerWidth < size ? setIsSmallMode(true) : setIsSmallMode(false);
    };
    window.addEventListener('resize', updateCollapsedWidth);
    updateCollapsedWidth();

    return () => window.removeEventListener('resize', updateCollapsedWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {loading ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: 1,
                transition: { type: 'spring', bounce: 0.5, duration: 0.5 },
              }}
              exit={{ scale: 1, translateY: 20, transition: { type: 'just' } }}
              style={{
                backgroundColor: colorBgContainer,
                boxShadow,
                width: isSmallMode ? undefined : size,
              }}
              className={cn(
                `flex flex-col justify-center items-center min-h-[480px] gap-6 p-6`,
                isSmallMode
                  ? 'w-full min-h-[320px] rounded-none'
                  : 'rounded-xl',
              )}
              layoutId="modal-layout"
            >
              <Loading color="priarmy" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: 1,
                transition: { type: 'spring', bounce: 0.5, duration: 0.5 },
              }}
              exit={{ scale: 1, translateY: 20, transition: { type: 'just' } }}
              style={{
                backgroundColor: colorBgContainer,
                boxShadow,
                width: isSmallMode ? undefined : size,
              }}
              className={cn(
                `flex flex-col gap-6 p-6`,
                isSmallMode ? 'w-full rounded-none' : 'rounded-xl',
              )}
              layoutId="modal-layout"
            >
              <header className="flex flex-row justify-between items-center">
                <Title type={'h3-semibold'}>{title}</Title>
              </header>
              {message ? <Text>{message}</Text> : null}
              {children}
              <footer
                className={cn(
                  'flex gap-4',
                  footerDirection === 'left' ? 'flex-row' : 'flex-row-reverse',
                )}
              >
                {actions?.map((action, index) => (
                  <Button
                    key={index}
                    buttonStyle={action?.style}
                    buttonColor={action?.color}
                    fullWidth={footerFitable}
                    onClick={action?.onClick ?? handleClose}
                  >
                    {action?.lable}
                  </Button>
                ))}
              </footer>
            </motion.div>
          )}
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
