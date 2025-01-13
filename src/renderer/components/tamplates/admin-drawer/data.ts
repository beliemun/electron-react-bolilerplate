import { publicRoutes } from '@routes';
import { DefaultOptionType } from 'antd/es/select';

export const navigateOptions: DefaultOptionType[] = publicRoutes.map(
  ({ label, path }) => ({ label, value: path }),
);
