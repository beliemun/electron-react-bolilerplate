import { cn } from '@common/utils';
import {
  Skeleton as SkeletonAntd,
  SkeletonProps as SkeletonAntdProps,
} from 'antd';

interface SkeletonProps extends SkeletonAntdProps {}

const Skeleton = ({ className, ...rest }: SkeletonProps) => {
  return <SkeletonAntd className={cn(className)} {...rest} />;
};

Skeleton.Avatar = SkeletonAntd.Avatar;
Skeleton.Button = SkeletonAntd.Button;
Skeleton.Image = SkeletonAntd.Image;
Skeleton.Input = SkeletonAntd.Input;
Skeleton.Node = SkeletonAntd.Node;

export { Skeleton };
