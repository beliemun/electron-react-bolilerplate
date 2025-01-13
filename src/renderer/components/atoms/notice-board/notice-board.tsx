import { Title } from '@components/atoms';
import { ButtonHTMLAttributes } from 'react';

interface NoticeBoardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const NoticeBoard = ({ children, ...rest }: NoticeBoardProps) => {
  return (
    <button
      className="px-12 py-8 rounded-[100px] bg-white/30 animate-pulse"
      {...rest}
    >
      <Title type="h3-normal" color="invert">
        {children}
      </Title>
    </button>
  );
};

export default NoticeBoard;
