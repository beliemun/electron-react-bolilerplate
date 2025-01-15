import { EquipmentType } from '@components/tamplates/admin-drawer/data';

export interface UserProps {
  password: string | undefined;
  useFaceRecognition: boolean;
  useDarkMode: boolean;
  equipmentType: EquipmentType;
  cameraIpList: string[];
}

export interface UserStore extends UserProps {
  setPassword: (password: string | undefined) => void;
  setUseFaceRecognition: (useFaceRecognition: boolean) => void;
  setUseDarkMode: (useDarkMode: boolean) => void;
  setEquipmentType: (equipmentType: EquipmentType) => void;
  setCameraIpList: (cameraIpList: string[]) => void;
}
