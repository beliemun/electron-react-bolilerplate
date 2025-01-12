import { Tooltip } from 'antd';
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { cn } from '@common/utils';
import { LoadingOutlined } from '@ant-design/icons';
import { motion, Variants, useAnimation, MotionProps } from 'framer-motion';
import { ButtonProps } from './types';
import { buttonStyles, waveStyles } from './styles';
import { useButtonControlStore } from '@stores';

const btnVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 240, damping: 12 },
  },
  click: {
    scale: 0.95,
    transition: { type: 'spring', duration: 0.1 },
  },
};

const waveVariants: Variants = {
  hidden: { opacity: 0, scale: 0, transition: { duration: 0 } },
  click: {
    opacity: 1,
    scale: 1.2,
    transition: { duration: 0.25 },
  },
  blur: { opacity: 0, scale: 1.2, transition: { duration: 0.25 } },
};

const Button = (
  {
    style,
    className,
    children,
    buttonRound = 'round',
    buttonStyle = 'solid',
    buttonSize = 'default',
    buttonColor = 'primary',
    fullWidth,
    disabled,
    loading,
    tooltipTitle,
    tooltipStyle,
    tooltipPlacement,
    showCloseButton = true,
    skipAnimation = false,
    onClick,
    ...rest
  }: ButtonProps & MotionProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const [isMounted, setIsMounted] = useState(false);
  // 에니메이션 종료에 따라 리렌더가 되면 안됨
  const { isAnimating, setAnimating } = useButtonControlStore();
  const btnController = useAnimation();
  const waveController = useAnimation();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      // 페이지 언마운트 시 애니메이션 정리
      setIsMounted(false);
      btnController.stop();
      waveController.stop();
    };
  }, [btnController, waveController]);

  useEffect(() => {
    if (isMounted && !skipAnimation) {
      btnController.start(btnVariants.visible);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const handleClick = useCallback(async () => {
    if (disabled || loading || !isMounted) return;

    // 상태가 true인 경우 클릭 방지
    if (isAnimating) {
      console.warn('Another button animation is already running.');
      return;
    }
    setAnimating(true);

    try {
      // Click 애니메이션
      if (!isMounted) return;
      await btnController.start(btnVariants.click);

      btnController.start(btnVariants.visible);

      // Wave 애니메이션
      if (!isMounted) return;
      await waveController.start(waveVariants.click);

      if (!isMounted) return;
      await waveController.start(waveVariants.blur);

      if (!isMounted) return;
      await waveController.start(waveVariants.hidden);

      onClick?.();
    } catch (error) {
      console.error('Animation interrupted:', error);
    } finally {
      setAnimating(false);
    }
  }, [
    disabled,
    loading,
    isMounted,
    isAnimating,
    btnController,
    waveController,
    onClick,
  ]);

  const handleClickWithoutAnimation = () => onClick?.();

  const btnProps = {
    ...(!skipAnimation && { initial: 'hidden' }),
    animate: btnController,
    exit: 'hidden',
  };

  const waveProps = {
    initial: 'hidden',
    animate: waveController,
    exit: 'hidden',
  };

  return (
    <div className={fullWidth ? 'flex w-full' : 'self-center w-min'}>
      <Tooltip
        title={tooltipTitle}
        style={tooltipStyle}
        placement={tooltipPlacement}
      >
        {/* CSS 스타일이 적용된 엘리먼트에 에니메이션을 적용하면 부하가 심하기 때문에 버튼과 분리해야 함 */}
        <motion.div
          className={cn({ 'w-full': fullWidth })}
          variants={btnVariants}
          {...btnProps}
        >
          <button
            ref={ref}
            style={{ ...style }}
            className={cn(
              'relative flex flex-row justify-center items-center overflow-hidden shrink-0',
              buttonStyles({
                buttonRound,
                buttonStyle,
                buttonSize,
                buttonColor,
                fullWidth,
                disabled,
                loading,
              }),
              className,
            )}
            disabled={disabled || loading}
            onClick={skipAnimation ? handleClickWithoutAnimation : handleClick}
            {...rest}
          >
            <motion.div
              variants={waveVariants}
              {...waveProps}
              className={cn(
                'absolute top-0 left-0 w-full h-full rounded-full z-10 cursor-pointer',
                waveStyles({ buttonColor, buttonStyle, disabled, loading }),
              )}
            />
            {disabled || loading || !isMounted ? (
              <LoadingOutlined className="mr-2" />
            ) : null}
            <span className={cn('select-none whitespace-nowrap')}>
              {children}
            </span>
          </button>
        </motion.div>
      </Tooltip>
    </div>
  );
};

export default forwardRef(Button);
