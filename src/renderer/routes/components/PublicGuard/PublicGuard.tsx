import { LoadingModal } from '@components/molecules';
import { useDarkModeStore, useUserStore } from '@stores';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const PublicGuard = () => {
  const [preload, setPreload] = useState(false);
  const { useDarkMode } = useUserStore();
  const { setDarkMode } = useDarkModeStore();

  useEffect(() => {
    setDarkMode(useDarkMode);
    setPreload(true);
  }, []);

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
