import { LoadingModal } from '@components/molecules';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const PublicGuard = () => {
  const [preload] = useState(true);

  if (!preload) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoadingModal loading />
      </div>
    );
  }
  return <Outlet />;
};

export default PublicGuard;
