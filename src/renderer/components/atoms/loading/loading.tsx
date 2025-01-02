import { Text } from '../text';
import { CSSProperties } from 'styled-components';
import loading_white from '@assets/lotties/loading-white.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@common/utils';

interface LoadingProps {
  style?: CSSProperties;
  calssName?: string;
  loadingMessage?: string;
}

export const Loading = ({ style, calssName, loadingMessage }: LoadingProps) => {
  return (
    <div
      style={{ ...style }}
      className={cn(
        'relative flex flex-col justify-center items-center min-w-32',
        calssName,
      )}
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
  );
};
