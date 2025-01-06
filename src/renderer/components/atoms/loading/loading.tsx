import { CSSProperties } from 'styled-components';
import loading_white from '@assets/lotties/loading-white.json';
import loading_primary from '@assets/lotties/loading-primary.json';
import Lottie from 'react-lottie-player';
import { cn } from '@common/utils';

type LoadingColorType = 'white' | 'priarmy';

interface LoadingProps {
  style?: CSSProperties;
  color?: LoadingColorType;
  calssName?: string;
}

export const Loading = ({
  style,
  color = 'white',
  calssName,
}: LoadingProps) => {
  let defaultData: object = loading_white;
  if (color === 'priarmy') {
    defaultData = loading_primary;
  }
  return (
    <div style={{ ...style }} className={cn(calssName)}>
      <Lottie
        animationData={defaultData}
        speed={1.5}
        loop
        play
        className="size-32 -m-12"
      />
    </div>
  );
};
