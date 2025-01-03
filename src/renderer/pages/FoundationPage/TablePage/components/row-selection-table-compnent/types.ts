import { ColorType } from "@/lib/colors";

export type MemberGenderType = "man" | "woman";
export type MemberRoleType = "onwer" | "manager" | "guest";

export interface DataType {
  key: number;
  name: string;
  age: number;
  gender: MemberGenderType;
  address: string;
}
