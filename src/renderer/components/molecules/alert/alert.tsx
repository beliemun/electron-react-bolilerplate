import { useState, useEffect } from 'react';
import { Button, Text, Title } from '@components/atoms';
import { cn } from '@common/utils';
import { theme } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useAlertStore } from '@stores';

export const Alert = () => {
  const {
    visible,
    size = 480,
    title,
    message,
    contents,
    actions,
    footerDirection = 'right',
    footerFitable = false,
    onDismiss,
  } = useAlertStore();
  const [isSmallMode, setIsSmallMode] = useState(false);
  const { colorBgContainer, boxShadow } = theme.useToken().token;

  useEffect(() => {
    const updateCollapsedWidth = () => {
      if (window.innerWidth < size) {
        setIsSmallMode(true);
      } else {
        setIsSmallMode(false);
      }
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
          style={{ backgroundColor: 'rgba(240, 240, 240, 0.85)' }}
          className={
            'fixed flex flex-col justify-center items-center w-full h-full min-h-screen top-0 left-0 bottom-0 right-0 m-auto z-40'
          }
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1, transition: { type: 'spring', bounce: 0.5, duration: 0.5 } }}
            exit={{ scale: 1, translateY: 20, transition: { type: 'just' } }}
            style={{
              backgroundColor: colorBgContainer,
              boxShadow,
              width: isSmallMode ? undefined : size,
            }}
            className={cn(
              `flex flex-col gap-8 p-8`,
              isSmallMode ? 'w-full rounded-none' : 'rounded-xl',
            )}
          >
            <header className="flex flex-row justify-between items-center">
              <Title>{title}</Title>
              {/* <Button buttonColor="slate" buttonStyle="soft" buttonSize="sm" onClick={onDismiss}>
                <CloseOutlined style={{ color: colorText, fontSize: 10 }} />
              </Button> */}
            </header>
            {message ? <Text>{message}</Text> : null}
            {contents}
            <footer
              className={cn(
                'flex gap-4 mt-2',
                footerDirection === 'left' ? 'flex-row' : 'flex-row-reverse',
              )}
            >
              {actions?.map((action, index) => (
                <Button
                  key={index}
                  buttonSize={'default'}
                  buttonStyle={action?.style}
                  buttonColor={action?.color}
                  fullWidth={footerFitable}
                  onClick={(action?.onClick || action?.onClickAsync) ?? onDismiss}
                  skipAnimation
                >
                  {action?.lable}
                </Button>
              ))}
            </footer>
          </motion.div>
        </motion.figure>
      ) : null}
    </AnimatePresence>
  );
};
