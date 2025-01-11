import { RadioOption, SelectOption } from '@components/atoms';

export const radioOptions: RadioOption[] = [
  {
    label: '본사',
    value: 'pusan',
  },
  {
    label: '지사',
    value: 'yangsan',
  },
  {
    label: '연구소',
    value: 'seoul',
  },
];

export const singleSelectOptions: SelectOption[] = [
  {
    label: '하드웨어 개발팀',
    value: 'hw-dev-team',
  },
  {
    label: '소프트웨어 개발팀',
    value: 'sw-dev-team',
  },
];

export const multiSelectOptions: SelectOption[] = [
  {
    label: 'UX/UI 디자인',
    value: 'uxui-design',
  },
  {
    label: '제품 디자인',
    value: 'prodcut-design',
  },
  {
    label: '프론트엔드',
    value: 'frontend',
  },
  {
    label: '백엔드',
    value: 'backend',
  },
  {
    label: '데브옵스',
    value: 'dev-ops',
  },
];

export const checkboxOptions = ['키보드', '마우스', '받침대', '허브'];
