import { CSSProperties, ReactNode, useState } from 'react';
import { TagSizeType, TagStyleType } from './types';
import { tagStyles } from './styles';
import { ColorType } from '@styles/colors';
import { cn } from '@common/utils';
import { theme } from 'antd';

export interface TagProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  tagStyle?: TagStyleType;
  tagSize?: TagSizeType;
  tagColor?: ColorType;
  icon?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export const Tag = ({
  style,
  className,
  children,
  tagStyle = 'outline',
  tagSize = 'default',
  tagColor = 'gray',
  icon,
  closable = false,
  onClose,
  ...rest
}: TagProps) => {
  const [hide, setHide] = useState(false);

  const {
    token: { fontSizeSM },
  } = theme.useToken();

  const handleHide = () => {
    if (onClose) {
      setHide((prev) => !prev);
      onClose();
    }
  };

  return (
    <div
      style={{ ...style }}
      className={cn(
        tagStyles({ tagStyle, tagSize, tagColor }),
        { hidden: hide },
        'shrink-0 whitespace-nowrap select-none flex flex-row justify-center items-center m-1',
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span
          style={{
            paddingRight: tagSize ? 6 : 12,
            fontSize: tagSize === 'sm' ? 14 : 20,
          }}
        >
          {icon}
        </span>
      ) : null}
      {children}
      {closable ? (
        <button
          onClick={handleHide}
          style={{
            fontSize: fontSizeSM,
            marginLeft: 4,
            opacity: 0.5,
            padding: 4,
          }}
        >
          ✕
        </button>
      ) : null}
    </div>
  );
};
