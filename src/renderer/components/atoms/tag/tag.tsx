import { CSSProperties, ReactNode, useState } from 'react';
import { TagSizeType, TagStyleType } from './types';
import { tagStyles } from './styles';
import { ColorType } from '@styles/colors';
import { cn } from '@common/utils';

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
        { 'pr-2': tagSize, hidden: hide },
        'shrink-0 whitespace-nowrap select-none',
        className,
      )}
      {...rest}
    >
      {icon ? (
        <span
          style={{
            paddingRight: tagSize ? 4 : 6,
            fontSize: tagSize === 'sm' ? 9 : 12,
          }}
        >
          {icon}
        </span>
      ) : null}
      {children}
      {closable ? (
        <button
          onClick={handleHide}
          style={{ fontSize: 11, marginLeft: 4, opacity: 0.5 }}
        >
          ✕
        </button>
      ) : null}
    </div>
  );
};
