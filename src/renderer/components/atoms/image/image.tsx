import { cn } from '@common/utils';
import { Image as ImageAntd, ImageProps as ImageAntdProps } from 'antd';

interface ImageProps extends ImageAntdProps {}

const Image = ({ className, ...rest }: ImageProps) => {
  return <ImageAntd className={cn(className)} {...rest} />;
};

Image.PreviewGroup = ImageAntd.PreviewGroup;

export { Image };
