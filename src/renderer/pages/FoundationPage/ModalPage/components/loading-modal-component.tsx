import { LoadingModal } from '@components/molecules';
import { LoadingModalProps } from '@components/molecules/loading-modal/types';
import { useEffect, useState } from 'react';

export const LoadingModalComponent = ({ ...rest }: LoadingModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <LoadingModal
      loadingMessage="Here is loading message"
      loading={loading}
      {...rest}
    />
  );
};
