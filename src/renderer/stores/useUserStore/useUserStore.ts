import { UserProps, UserStore } from './types';
import {
  equipmentOptions,
  EquipmentType,
} from '@components/tamplates/admin-drawer/data';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialData: UserProps = {
  password: undefined,
  useDarkMode: false,
  useFaceRecognition: false,
  equipmentType: equipmentOptions[0],
  cameraIpList: ['168.192.0.1', '168.192.0.2'],
};

const useUserStore = create<UserStore>()(
  persist<UserStore>(
    (set) => ({
      ...initialData,
      setPassword: (password: string | undefined) => set({ password }),
      setUseFaceRecognition: (useFaceRecognition: boolean) =>
        set({ useFaceRecognition }),
      setUseDarkMode: (useDarkMode: boolean) => set({ useDarkMode }),
      setEquipmentType: (equipmentType: EquipmentType) =>
        set({ equipmentType }),
      setCameraIpList: (cameraIpList: string[]) => set({ cameraIpList }),
    }),
    {
      name: 'user-storage',
    },
  ),
);

export default useUserStore;
