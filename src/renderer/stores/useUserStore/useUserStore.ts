import { UserProps, UserStore, EquipmentType } from './types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const equipmentOptions: EquipmentType[] = [
  {
    label: '지게차(2)',
    value: 'forklift',
    camera: 2,
  },
  {
    label: '대차(2)',
    value: 'cart',
    camera: 2,
  },
  {
    label: '크레인(8)',
    value: 'crane',
    camera: 8,
  },
  {
    label: '트랜스포터(3)',
    value: 'trasporter',
    camera: 3,
  },
];

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
