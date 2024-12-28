import { FoundationPage, HomePage } from '@pages';
import { PATH } from './constants';
import { Route } from './types';

export const publicRoutes: Route[] = [
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.FOUNDATION, element: <FoundationPage /> },
];

export const privateRoutes: Route[] = [];
