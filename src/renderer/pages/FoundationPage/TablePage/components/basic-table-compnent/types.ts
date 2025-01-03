import { ColorType } from '@styles/colors';

export type MemberGenderType = 'man' | 'woman';
export type MemberRoleType = 'owner' | 'manager' | 'guest';

export interface DataType {
  key: number;
  name: string;
  age: number;
  gender: MemberGenderType;
  address: string;
  role: {
    type: MemberRoleType;
    color: ColorType;
  };
  editable: boolean;
  deleteable: boolean;
}
