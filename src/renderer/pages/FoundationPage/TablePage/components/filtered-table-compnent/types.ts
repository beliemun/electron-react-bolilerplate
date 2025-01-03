import { ColorType } from '@styles/colors';

export type MemberGenderType = 'man' | 'woman';
export type MemberRoleType = 'onwer' | 'manager' | 'guest';

export interface DataType {
  age: number;
  gender: MemberGenderType;
  address: string;
  role: {
    type: MemberRoleType;
    color: ColorType;
  };
}
