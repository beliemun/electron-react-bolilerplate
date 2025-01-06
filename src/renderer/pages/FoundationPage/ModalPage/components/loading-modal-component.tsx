import { LoadingModal } from '@components/molecules';
import { LoadingModalProps } from '@components/molecules/loading-modal/types';
import { useEffect, useState } from 'react';

export const LoadingModalComponent = ({ ...rest }: LoadingModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <LoadingModal
      loading={loading}
      message="Here is loading message"
      {...rest}
    />
  );
};
