import { LoadingModal } from '@components/molecules';
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateGuard = () => {
  const [token] = useState(true);
  const [preload] = useState(true);

  if (!preload) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <LoadingModal loading />
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to={'/'} />;
};

export default PrivateGuard;
