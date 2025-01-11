import { Button, Text, Title } from '@components/atoms';
import { cn } from '@common/utils';
import { theme } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useAlertStore, useDarkModeStore } from '@stores';

export const Alert = () => {
  const { isDarkMode } = useDarkModeStore();
  const {
    visible,
    size,
    title,
    message,
    contents,
    actions,
    footerDirection = 'right',
    footerFitable = false,
    onDismiss,
  } = useAlertStore();
  const { colorBgContainer, boxShadow } = theme.useToken().token;
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
              width: size,
            }}
            className={cn('flex flex-col gap-8 p-8 rounded-xl')}
          >
            <header className="flex flex-row justify-between items-center">
              <Title type={'h3-semibold'}>{title}</Title>
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
                  buttonStyle={action?.style}
                  buttonColor={action?.color}
                  fullWidth={footerFitable}
                  onClick={
                    (action?.onClick || action?.onClickAsync) ?? onDismiss
                  }
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
